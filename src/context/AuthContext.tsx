import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

// Demo users storage (simulating Firebase)
const DEMO_USERS_KEY = 'gorail_users';
const CURRENT_USER_KEY = 'gorail_current_user';

const getDemoUsers = (): Record<string, User & { password: string }> => {
  const stored = localStorage.getItem(DEMO_USERS_KEY);
  if (stored) return JSON.parse(stored);
  
  // Initialize with admin and demo users
  const defaultUsers = {
    'admin@gorail.com': {
      uid: 'admin-001',
      email: 'admin@gorail.com',
      displayName: 'Admin User',
      password: 'admin123',
      isAdmin: true
    },
    'user@gorail.com': {
      uid: 'user-001',
      email: 'user@gorail.com',
      displayName: 'Demo User',
      password: 'user123',
      isAdmin: false
    }
  };
  localStorage.setItem(DEMO_USERS_KEY, JSON.stringify(defaultUsers));
  return defaultUsers;
};

const saveDemoUsers = (users: Record<string, User & { password: string }>) => {
  localStorage.setItem(DEMO_USERS_KEY, JSON.stringify(users));
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user on mount
    const storedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const users = getDemoUsers();
    const userRecord = users[email.toLowerCase()];
    
    if (!userRecord || userRecord.password !== password) {
      throw new Error('Invalid email or password');
    }
    
    const loggedInUser: User = {
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      isAdmin: userRecord.isAdmin
    };
    
    setUser(loggedInUser);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedInUser));
  };

  const loginWithGoogle = async () => {
    // Simulate Google OAuth login for demo purposes
    // In production, this would use Firebase's signInWithPopup(auth, googleProvider)
    
    // Generate a random Google user for demo
    const googleUsers = [
      { name: 'John Doe', email: 'john.doe@gmail.com' },
      { name: 'Jane Smith', email: 'jane.smith@gmail.com' },
      { name: 'Alex Johnson', email: 'alex.johnson@gmail.com' },
      { name: 'Sarah Williams', email: 'sarah.williams@gmail.com' },
      { name: 'Michael Brown', email: 'michael.brown@gmail.com' }
    ];
    
    const randomUser = googleUsers[Math.floor(Math.random() * googleUsers.length)];
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = getDemoUsers();
    
    // Check if user already exists
    if (!users[randomUser.email.toLowerCase()]) {
      // Create new user from Google
      const newUser = {
        uid: `google-${Date.now()}`,
        email: randomUser.email.toLowerCase(),
        displayName: randomUser.name,
        password: '', // Google users don't have password
        photoURL: `https://ui-avatars.com/api/?name=${encodeURIComponent(randomUser.name)}&background=2563EB&color=fff`,
        isAdmin: false
      };
      
      users[randomUser.email.toLowerCase()] = newUser;
      saveDemoUsers(users);
    }
    
    const userRecord = users[randomUser.email.toLowerCase()];
    
    const loggedInUser: User = {
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      photoURL: `https://ui-avatars.com/api/?name=${encodeURIComponent(userRecord.displayName)}&background=2563EB&color=fff`,
      isAdmin: userRecord.isAdmin
    };
    
    setUser(loggedInUser);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedInUser));
  };

  const register = async (email: string, password: string, name: string) => {
    const users = getDemoUsers();
    
    if (users[email.toLowerCase()]) {
      throw new Error('Email already registered');
    }
    
    const newUser = {
      uid: `user-${Date.now()}`,
      email: email.toLowerCase(),
      displayName: name,
      password,
      isAdmin: false
    };
    
    users[email.toLowerCase()] = newUser;
    saveDemoUsers(users);
    
    const loggedInUser: User = {
      uid: newUser.uid,
      email: newUser.email,
      displayName: newUser.displayName,
      isAdmin: false
    };
    
    setUser(loggedInUser);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(loggedInUser));
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  const resetPassword = async (email: string) => {
    const users = getDemoUsers();
    if (!users[email.toLowerCase()]) {
      throw new Error('No account found with this email');
    }
    // In demo mode, just show success
    console.log('Password reset email sent to:', email);
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
