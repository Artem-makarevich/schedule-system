
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCxA0j-DYlOq2UhS-cSyXj5xcoruW0EaHM",
    authDomain: "schedule-system-60bf3.firebaseapp.com",
    projectId: "schedule-system-60bf3",
    storageBucket: "schedule-system-60bf3.appspot.com",
    messagingSenderId: "71974223762",
    appId: "1:71974223762:web:ddb38d27a28f5857c60b4b",
    measurementId: "G-GGB1QT1VZH"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };