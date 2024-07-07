// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiAMvFZlOy15EISch0ENQKKMPFEj_zz8c",
  authDomain: "the-tobi-gallery.firebaseapp.com",
  projectId: "the-tobi-gallery",
  storageBucket: "the-tobi-gallery.appspot.com",
  messagingSenderId: "329445807232",
  appId: "1:329445807232:web:4ef9013f118843d4050265",
  measurementId: "G-NKTQ6CQH7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const firestore = getFirestore(app);


export { storage,analytics,app,firestore,auth  };
