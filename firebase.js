// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmHOFy_gD6DQI2bDetvUjlb0le68cb4Ow",
  authDomain: "react-native-auth-kuziworks.firebaseapp.com",
  projectId: "react-native-auth-kuziworks",
  storageBucket: "react-native-auth-kuziworks.appspot.com",
  messagingSenderId: "26257577732",
  appId: "1:26257577732:web:a339c083cba6c7d253a251",
  measurementId: "G-4DKFENLG97"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
