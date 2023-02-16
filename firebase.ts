// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Bvvu7ozG6J_j7uMltORO6At0U-aQsPc",
  authDomain: "chat-gpt-demo-378002.firebaseapp.com",
  projectId: "chat-gpt-demo-378002",
  storageBucket: "chat-gpt-demo-378002.appspot.com",
  messagingSenderId: "874227318272",
  appId: "1:874227318272:web:a9bf1b86644f600851e2e5",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };
