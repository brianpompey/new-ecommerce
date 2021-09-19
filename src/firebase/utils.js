import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from './config';

const firebaseApp = initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const firestore = getFirestore();


export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });
