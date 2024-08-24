// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmOZy3s6SisEQbOtdSWjcUGgPE9laECRM",
  authDomain: "san-francisco-coffee-site.firebaseapp.com",
  databaseURL: "https://san-francisco-coffee-site-default-rtdb.firebaseio.com",
  projectId: "san-francisco-coffee-site",
  storageBucket: "san-francisco-coffee-site.appspot.com",
  messagingSenderId: "526912932454",
  appId: "1:526912932454:web:a2c198a7405b590d32bba7",
  measurementId: "G-7KGNLT8QLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);