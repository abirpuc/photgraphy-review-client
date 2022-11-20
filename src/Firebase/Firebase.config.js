// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnK2B8fRW5cVBPM9WlUQ09htqw-nkV60Y",
  authDomain: "photography-review-fdda3.firebaseapp.com",
  projectId: "photography-review-fdda3",
  storageBucket: "photography-review-fdda3.appspot.com",
  messagingSenderId: "473969305687",
  appId: "1:473969305687:web:b0cad8cf14814bc010db12",
  measurementId: "G-7BPSC8J8HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);