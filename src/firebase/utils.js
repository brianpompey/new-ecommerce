import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from './config';

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);

const db = getFirestore();
