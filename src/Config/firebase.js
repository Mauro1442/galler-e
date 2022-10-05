import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0X5CrWC2-rIUEEj6pl9iICTrxBmIP0Yc",
  authDomain: "maria-105ec.firebaseapp.com",
  projectId: "maria-105ec",
  storageBucket: "maria-105ec.appspot.com",
  messagingSenderId: "748703324231",
  appId: "1:748703324231:web:945b3732bb58a1d3463962",
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth = firebase.auth();
  firebase.db = firebase.firestore();
export default firebase;
