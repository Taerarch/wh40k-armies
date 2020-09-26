import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const config = {
    apiKey: "AIzaSyBQXmqwNOXu1sx8q3IVSgECzK9_kftmevg",
    authDomain: "army-lists-40k.firebaseapp.com",
    databaseURL: "https://army-lists-40k.firebaseio.com",
    projectId: "army-lists-40k",
    storageBucket: "army-lists-40k.appspot.com",
    messagingSenderId: "933902690652",
    appId: "1:933902690652:web:6843b4dabfa7f95582b999",
    measurementId: "G-E2SXHJ390T"
};
  // Initialize Firebase

firebase.initializeApp(config);

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();

export default firebase;
