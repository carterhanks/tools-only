import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBl2xMxXKJzNHm67XykAn9DOTcw89yXsZY",
	authDomain: "tools-only.firebaseapp.com",
	projectId: "tools-only",
	storageBucket: "tools-only.appspot.com",
	messagingSenderId: "1050693139404",
	appId: "1:1050693139404:web:b8a642c953f81f015ffb69",
	measurementId: "G-C9S9GW4H05"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
