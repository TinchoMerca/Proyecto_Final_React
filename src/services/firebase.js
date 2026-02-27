// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-N4l6FzAraMT12TYnBubBBl_1PZOBKPc",
    authDomain: "musclestore-react-701b6.firebaseapp.com",
    projectId: "musclestore-react-701b6",
    storageBucket: "musclestore-react-701b6.firebasestorage.app",
    messagingSenderId: "170428146039",
    appId: "1:170428146039:web:f9d198d7d9f2b554948172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 2. Obtenemos la referencia a la base de datos  y la exportamos
export const db = getFirestore(app);