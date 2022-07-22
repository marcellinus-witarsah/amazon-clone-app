import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyDsnmAnhdQWaHMqoB5aO6cCJAeINmWc9b4",
    authDomain: "clone-app-f2ce3.firebaseapp.com",
    projectId: "clone-app-f2ce3",
    storageBucket: "clone-app-f2ce3.appspot.com",
    messagingSenderId: "1396847758",
    appId: "1:1396847758:web:a56e5f78fa5029ccef85df",
    measurementId: "G-E6LZ4WWLNW"
  };

//initialize firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

//initialise database and authentication
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export {db, auth}
