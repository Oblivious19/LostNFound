import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPije__gm9shhKVP1OuGMwea_1ItVhhbc",
  authDomain: "lostnfound-e7674.firebaseapp.com",
  projectId: "lostnfound-e7674",
  storageBucket: "lostnfound-e7674.appspot.com",
  messagingSenderId: "833791592257",
  appId: "1:833791592257:web:3aee2bbe5a1277ff3983c0",
  measurementId: "G-PJ6P3E0SGC"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app); // Initialize Auth
const provider = new GoogleAuthProvider();

export { db, auth, provider };