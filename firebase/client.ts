
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD08qmOntbnIrP0RzoqGSf-JuC5i1ql5-c",
  authDomain: "intervu-33.firebaseapp.com",
  projectId: "intervu-33",
  storageBucket: "intervu-33.firebasestorage.app",
  messagingSenderId: "407926660428",
  appId: "1:407926660428:web:a0c015775bcda9f20d43e9",
  measurementId: "G-DH166RXNYE"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)