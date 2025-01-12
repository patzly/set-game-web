// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCYVtH7p7gATE2Ilhdwctn8-9InPhJ61y0",
    authDomain: "set-game-d6102.firebaseapp.com",
    projectId: "set-game-d6102",
    storageBucket: "set-game-d6102.firebasestorage.app",
    messagingSenderId: "915528246131",
    appId: "1:915528246131:web:baa939b5d327be7235db06",
    measurementId: "G-SV9HCRV9J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
