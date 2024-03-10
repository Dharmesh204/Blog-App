/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBV1TPBCs8eC0bYNGMCV_949NyVIl0JGU",
  authDomain: "blogapp-59cdd.firebaseapp.com",
  projectId: "blogapp-59cdd",
  storageBucket: "blogapp-59cdd.appspot.com",
  messagingSenderId: "42407836558",
  appId: "1:42407836558:web:a460202ff1639f710742df",
  measurementId: "G-PG77EWDV29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);