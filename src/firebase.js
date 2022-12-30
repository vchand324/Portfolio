import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBQy2txxTlVhAMCZtFW8IdGZOsvm-ArlL4",
  authDomain: "ashish-portfolio-d7740.firebaseapp.com",
  projectId: "ashish-portfolio-d7740",
  storageBucket: "ashish-portfolio-d7740.appspot.com",
  messagingSenderId: "121903653984",
  appId: "1:121903653984:web:68c4dc6dabfa34e183cf05"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();