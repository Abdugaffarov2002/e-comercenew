// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiZs55KzjE9uqd_Svznh3xxUdCo475Vjg",
  authDomain: "project-with-mentor-66340.firebaseapp.com",
  projectId: "project-with-mentor-66340",
  storageBucket: "project-with-mentor-66340.appspot.com",
  messagingSenderId: "454870822591",
  appId: "1:454870822591:web:1a7a546fd5616be932200a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
