// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADu67gduF9zVS6_p4ZphKyD00Pu7SKGAA",
  authDomain: "netflixgpt-59143.firebaseapp.com",
  projectId: "netflixgpt-59143",
  storageBucket: "netflixgpt-59143.appspot.com",
  messagingSenderId: "112253136375",
  appId: "1:112253136375:web:47b38e287e3e85d5f692f2",
  measurementId: "G-SJJ3NYBBNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);