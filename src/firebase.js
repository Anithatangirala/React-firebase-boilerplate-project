// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth , GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSIbkyw6pPpts89jQPD7eDMO4nSjSxRqo",
  authDomain: "shopping-e70b8.firebaseapp.com",
  projectId: "shopping-e70b8",
  storageBucket: "shopping-e70b8.firebasestorage.app",
  messagingSenderId: "771843623312",
  appId: "1:771843623312:web:11a89d94683202842e4b15",
  measurementId: "G-F5NKFG8V8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

