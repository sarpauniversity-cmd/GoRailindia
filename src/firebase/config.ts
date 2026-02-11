// Firebase Configuration
// Note: For production, use environment variables for these values

// Demo Firebase configuration - Replace with your own Firebase project config for production
const firebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "gorail-demo.firebaseapp.com",
  projectId: "gorail-demo",
  storageBucket: "gorail-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};

// For demo purposes, we'll use localStorage instead of actual Firebase
// In production, uncomment the Firebase imports and use them

/*
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const db = getFirestore(app);
export default app;
*/

// Demo exports for local development
export const auth = null;
export const googleProvider = null;
export const db = null;
export { firebaseConfig };
