import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAuWR0COJVduhX5L1B6hLJRO9D3IBK93g",
  authDomain: "erling-bot.firebaseapp.com",
  projectId: "erling-bot",
  storageBucket: "erling-bot.appspot.com",
  messagingSenderId: "920033225536",
  appId: "1:920033225536:web:c7abc483b54f9aa9f2e8a5",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
