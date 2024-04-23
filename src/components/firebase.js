// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCldbdRE6ZpyOs7ZxQ5O35uDIXrgRe7SQg",
  authDomain: "cbit-samarpan-2024.firebaseapp.com",
  projectId: "cbit-samarpan-2024",
  storageBucket: "cbit-samarpan-2024.appspot.com",
  messagingSenderId: "975016150195",
  appId: "1:975016150195:web:d6e905aeea60e6a38bdcc6",
  measurementId: "G-YK6V2Y8BXT"
};

// Initialize Firebase
getAnalytics(initializeApp(firebaseConfig));