import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAk1gGwjDPsVBeJpX9YkVFuDxZ8RKjexZ4",
    authDomain: "house-marketplace-app-b909b.firebaseapp.com",
    projectId: "house-marketplace-app-b909b",
    storageBucket: "house-marketplace-app-b909b.firebasestorage.app",
    messagingSenderId: "598869818655",
    appId: "1:598869818655:web:73dff0591145394b11042a",
    measurementId: "G-4YS22QQZ1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);