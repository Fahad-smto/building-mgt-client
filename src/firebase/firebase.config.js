// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_EqkddBxU17p4W9Ak9jJUv5GeSNhQGrY",
  authDomain: "building-mgt.firebaseapp.com",
  projectId: "building-mgt",
  storageBucket: "building-mgt.firebasestorage.app",
  messagingSenderId: "718263183053",
  appId: "1:718263183053:web:9201c36495248f450feb84"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export default app;