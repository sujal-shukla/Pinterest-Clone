import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAGr1wppp5JsVYI7PBKllegSwbPYWoaZIg",
  authDomain: "pinterest-clone-6a4b4.firebaseapp.com",
  projectId: "pinterest-clone-6a4b4",
  storageBucket: "pinterest-clone-6a4b4.appspot.com",
  messagingSenderId: "518206543323",
  appId: "1:518206543323:web:b297c57a1f03f0c6ce43fe",
  measurementId: "G-142HQGQVGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app