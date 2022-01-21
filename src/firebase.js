// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/compat/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAnalytics } from "firebase/compat/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCu6Os9n_pWw9nvJY4DCDSwWhE5nl9dTC4",
    authDomain: "bogino-25eac.firebaseapp.com",
    projectId: "bogino-25eac",
    storageBucket: "bogino-25eac.appspot.com",
    messagingSenderId: "16672715334",
    appId: "1:16672715334:web:08134c8371240ea9aa1047",
    measurementId: "G-TSHYRTK5RT"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);