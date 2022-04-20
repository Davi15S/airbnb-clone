import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDOEMvZIH2h2425mQrhxnMeGZ91d-r29OE",
    authDomain: "airbnb-clone-dbebd.firebaseapp.com",
    projectId: "airbnb-clone-dbebd",
    storageBucket: "airbnb-clone-dbebd.appspot.com",
    messagingSenderId: "527976169761",
    appId: "1:527976169761:web:cfe04a8c276448aa32fe60"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);