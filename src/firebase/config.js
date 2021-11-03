import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGoWNxeX5ECwxaMm7uTnEgPY5onx5c37U",
  authDomain: "winsta-a0676.firebaseapp.com",
  projectId: "winsta-a0676",
  storageBucket: "winsta-a0676.appspot.com",
  messagingSenderId: "288084572415",
  appId: "1:288084572415:web:a004a2529e789126c834ca",
  measurementId: "G-8GFKXBD0HK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};
