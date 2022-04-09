import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCpXCOEic6uzP_Q4izUS2kN1vgZEq5PxIg",
  authDomain: "ema-john-simple-9671a.firebaseapp.com",
  projectId: "ema-john-simple-9671a",
  storageBucket: "ema-john-simple-9671a.appspot.com",
  messagingSenderId: "500531741542",
  appId: "1:500531741542:web:8dbcea1c0481a44fb5fea7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
