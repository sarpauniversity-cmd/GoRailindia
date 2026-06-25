import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile,
  FirebaseError,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase/config';

interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  isAdmin?: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper: save user profile to Firestore
const saveUserToFirestore = async (uid: string, data: Partial<User>) => {
  const userRef = doc(db, 'users', uid);
  await setDoc(userRef, data, { merge: true });
};

// Helper: fetch user profile from Firestore (to get isAdmin etc.)
const getUserFromFirestore = async (uid: string): Promise<Partial<User>> => {
  const userRef = doc(db, 'users', uid);
  const snap = await getDoc(userRef);
  return snap.exists() ? (snap.data() as Partial<User>) : {};
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Listen to Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Fetch extra fields (isAdmin) from Firestore
        const firestoreData = await getUserFromFirestore(firebaseUser.uid);
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email ?? '',
          displayName: firebaseUser.displayName ?? firestoreData.displayName ?? '',
          photoURL: firebaseUser.photoURL ?? undefined,
          isAdmin: firestoreData.isAdmin ?? false,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Email/password login
  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // onAuthStateChanged will update the user state automatically
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (
          error.code === 'auth/user-not-found' ||
          error.code === 'auth/wrong-password' ||
          error.code === 'auth/invalid-credential'
        ) {
          throw new Error('Invalid email or password');
        }
        throw new Error(error.message);
      }
      throw error;
    }
  };

  // Google sign-in
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;

      // Save to Firestore on first Google login
      const firestoreData = await getUserFromFirestore(firebaseUser.uid);
      if (!firestoreData.uid) {
        await saveUserToFirestore(firebaseUser.uid, {
          uid: firebaseUser.uid,
          email: firebaseUser.email ?? '',
          displayName: firebaseUser.displayName ?? '',
          photoURL: firebaseUser.photoURL ?? undefined,
          isAdmin: false,
        });
      }
      // onAuthStateChanged handles state update
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/popup-closed-by-user') {
          throw new Error('Sign-in popup was closed. Please try again.');
        }
        throw new Error(error.message);
      }
      throw error;
    }
  };

  // Email/password registration
  const register = async (email: string, password: string, name: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = result.user;

      // Set displayName on Firebase Auth profile
      await updateProfile(firebaseUser, { displayName: name });

      // Save user doc to Firestore
      await saveUserToFirestore(firebaseUser.uid, {
        uid: firebaseUser.uid,
        email: firebaseUser.email ?? '',
        displayName: name,
        isAdmin: false,
      });

      // onAuthStateChanged will update state, but displayName may lag — update manually
      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email ?? '',
        displayName: name,
        isAdmin: false,
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/email-already-in-use') {
          throw new Error('Email already registered');
        }
        if (error.code === 'auth/weak-password') {
          throw new Error('Password should be at least 6 characters');
        }
        throw new Error(error.message);
      }
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
    // onAuthStateChanged will set user to null
  };

  // Password reset email
  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/user-not-found') {
          throw new Error('No account found with this email');
        }
        throw new Error(error.message);
      }
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, loginWithGoogle, register, logout, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
