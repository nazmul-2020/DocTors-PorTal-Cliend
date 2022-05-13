// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5bo3GiMl3iG6hhO2lqmOn2PYzrHuO70g",
    authDomain: "doctors-portal-d034d.firebaseapp.com",
    projectId: "doctors-portal-d034d",
    storageBucket: "doctors-portal-d034d.appspot.com",
    messagingSenderId: "401659088693",
    appId: "1:401659088693:web:53faf3b8514bd95908467c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;