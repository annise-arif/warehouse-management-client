import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDivcRB5D7XTzib-pEeQtIXjQ-ksZ4OfLE",
    authDomain: "warehouse-of-car.firebaseapp.com",
    projectId: "warehouse-of-car",
    storageBucket: "warehouse-of-car.appspot.com",
    messagingSenderId: "280900397075",
    appId: "1:280900397075:web:600490157f4d934e8137e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;