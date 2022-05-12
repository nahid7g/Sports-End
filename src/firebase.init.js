// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwA72wR3zNKHiq0po5DbyU8pIptSykrx8",
    authDomain: "sports-end.firebaseapp.com",
    projectId: "sports-end",
    storageBucket: "sports-end.appspot.com",
    messagingSenderId: "364882352849",
    appId: "1:364882352849:web:2eb4f7a49fcc143e6ec3f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;