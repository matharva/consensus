// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnZ_iSbX4YVSLGjJ4byIJDWKpD_GKdgE8",
  authDomain: "consensus-bbd9d.firebaseapp.com",
  projectId: "consensus-bbd9d",
  storageBucket: "consensus-bbd9d.appspot.com",
  messagingSenderId: "1084698501033",
  appId: "1:1084698501033:web:e504d0581278ee53626eb8",
  measurementId: "G-JHBFSXH51Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
