// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';//added

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa3TehvdhyedUxyEJR9x6YyI3teydsAVU",
  authDomain: "madrina-4bfa2.firebaseapp.com",
  projectId: "madrina-4bfa2",
  storageBucket: "madrina-4bfa2.appspot.com",
  messagingSenderId: "936907928738",
  appId: "1:936907928738:web:2d23ae697d8bf4e9ad53fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db