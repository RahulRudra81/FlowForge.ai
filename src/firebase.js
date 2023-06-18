import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLRV595Z55H2Vc8iEeWEw08oBivPJLB08",
  authDomain: "audioai-fc0d9.firebaseapp.com",
  projectId: "audioai-fc0d9",
  storageBucket: "audioai-fc0d9.appspot.com",
  messagingSenderId: "794704790083",
  appId: "1:794704790083:web:21dc47e36342943b0d8af6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;