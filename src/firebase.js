import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCxZJ_UUzIpTfnUyzg-PsGB3nDaVj-uJWY",
	projectId: "tex-uwu",
	authDomain: "tex-uwu.firebaseapp.com",
	storageBucket: "tex-uwu.appspot.com",
	messagingSenderId: "106251126289",
	appId: "1:106251126289:web:e8a1e2e58dcbe993d793b0",
	measurementId: "G-SQGJ40N1FG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Database
const db = firebaseApp.firestore();

// Auththentication
const auth = firebase.auth();

export { db, auth };
