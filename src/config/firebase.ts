// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUSDYoagU2opiZqj3JiB4iDlUpZfYGdjw",
  authDomain: "social-react-161ad.firebaseapp.com",
  projectId: "social-react-161ad",
  storageBucket: "social-react-161ad.appspot.com",
  messagingSenderId: "263029418676",
  appId: "1:263029418676:web:4edfaa33b5a4888c5c05e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();