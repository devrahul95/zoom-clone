// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {collection,getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {


  apiKey: process.env.api_key,
  authDomain: process.env.auth_Domain,
  projectId: process.env.project_Id,
  storageBucket: process.env.storage_Bucket,
  messagingSenderId: process.env.messaging_SenderId,
  appId: process.env.app_Id,
  measurementId: process.env.measurement_Id

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
export const firebaseDB = getFirestore(app)