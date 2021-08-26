import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD2a_1wzDFgU4cfNofqm9ijte18F8A6I0g",
    authDomain: "flash-chat-dsd-19-2-67a93.firebaseapp.com",
    projectId: "flash-chat-dsd-19-2-67a93",
    storageBucket: "flash-chat-dsd-19-2-67a93.appspot.com",
    messagingSenderId: "688424690318",
    appId: "1:688424690318:android:fc7febbbd292ce6a8e9fdf"
}


const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);