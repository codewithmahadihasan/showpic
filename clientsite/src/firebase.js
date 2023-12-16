// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCr6UGiW70H1B9iN23ZL8giyeZeEFLaNO4",
    authDomain: "project-showpic.firebaseapp.com",
    projectId: "project-showpic",
    storageBucket: "project-showpic.appspot.com",
    messagingSenderId: "225058409290",
    appId: "1:225058409290:web:9bdf6f651e3e0143900fb3",
    measurementId: "G-PT0NDHV5GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app