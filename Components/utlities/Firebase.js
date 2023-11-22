
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCdAUzcKkqsCgMQdhxGlAYiiS364dij1w0",
    authDomain: "muhfirebase003.firebaseapp.com",
    projectId: "muhfirebase003",
    storageBucket: "muhfirebase003.appspot.com",
    messagingSenderId: "284019063770",
    appId: "1:284019063770:web:de41c966a29abd88df1ee3",
    measurementId: "G-83JZQN2QDH"
};

const app = initializeApp(firebaseConfig);
const AUTH = getAuth(app);


export { AUTH }