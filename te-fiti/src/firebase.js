import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCHEvddClJme2bHYk1x6s7_prGMYY9RYOE",
  authDomain: "crudex-32db6.firebaseapp.com",
  projectId: "crudex-32db6",
  storageBucket: "crudex-32db6.appspot.com",
  messagingSenderId: "2006023966",
  appId: "1:2006023966:web:72942b060c93fe6d30530f",
  measurementId: "G-D71T2XESN9",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();

export default db;
