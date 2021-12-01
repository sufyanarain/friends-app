import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAV2Z81gGjs0lSAA0Iu2ir0vHfJkFJiSfI",
    authDomain: "friends-app-f3d94.firebaseapp.com",
    projectId: "friends-app-f3d94",
    storageBucket: "friends-app-f3d94.appspot.com",
    messagingSenderId: "1055832447705",
    appId: "1:1055832447705:web:58f8da5a499b28771f3cc8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const stateChange = onAuthStateChanged;

export { firebaseConfig, auth, db, stateChange }