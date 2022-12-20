// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import 'firebase/auth';
// import * as firebase from 'firebase/app'



// const firebaseConfig = {
//     apiKey: "AIzaSyAOngbwz8O6K3yrIMDsnYdF0zK8DO74Mqg",
//     authDomain: "quick-wall-357622.firebaseapp.com",
//     projectId: "quick-wall-357622",
//     storageBucket: "quick-wall-357622.appspot.com",
//     messagingSenderId: "857150479386",
//     appId: "1:857150479386:web:4053c105f877f9c31c05a3",
//     measurementId: "G-X6NN1BR95S"

// };
// const app = firebase.initializeApp({
//     apiKey: "AIzaSyA9Iuk99syzKa_94ZVoYVLlHsjSEpqEAMk",
//     authDomain: "pabloa-866fc.firebaseapp.com",
//     projectId: "pabloa-866fc",
//     storageBucket: "pabloa-866fc.appspot.com",
//     messagingSenderId: "823217076323",
//     appId: "1:823217076323:web:bcba7358f78c071a286056"
// });
// // initializeApp(firebaseConfig)
// export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOngbwz8O6K3yrIMDsnYdF0zK8DO74Mqg",
    authDomain: "quick-wall-357622.firebaseapp.com",
    projectId: "quick-wall-357622",
    storageBucket: "quick-wall-357622.appspot.com",
    messagingSenderId: "857150479386",
    appId: "1:857150479386:web:4053c105f877f9c31c05a3",
    measurementId: "G-X6NN1BR95S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
