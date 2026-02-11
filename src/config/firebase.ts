import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration - Replace with your actual config
const firebaseConfig = {
  apiKey: "AIzaSyDemo_Replace_With_Your_Key",
  authDomain: "railbook-demo.firebaseapp.com",
  projectId: "railbook-demo",
  storageBucket: "railbook-demo.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
