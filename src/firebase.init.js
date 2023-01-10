// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq_qyZU1mAh6Ane9CGe8vpeN8glww5HgI",
  authDomain: "takaonline-498aa.firebaseapp.com",
  projectId: "takaonline-498aa",
  storageBucket: "takaonline-498aa.appspot.com",
  messagingSenderId: "402874623622",
  appId: "1:402874623622:web:298a6131f43a7dd38b1307",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
