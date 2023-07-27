import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQtDAc9PcgEokw61Zl2VghrWdiDoUgvso",
  authDomain: "proyecto-reactjs-367f3.firebaseapp.com",
  projectId: "proyecto-reactjs-367f3",
  storageBucket: "proyecto-reactjs-367f3.appspot.com",
  messagingSenderId: "1026943140965",
  appId: "1:1026943140965:web:0a10351c15972c273df28c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
