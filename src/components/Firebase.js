import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFbV45Mwrq0n5F9WPkkMde-LzsogSkph8",
  authDomain: "cnsonline-75797.firebaseapp.com",
  databaseURL: "https://cnsonline-75797.firebaseio.com",
  projectId: "cnsonline-75797",
  storageBucket: "cnsonline-75797.appspot.com",
  messagingSenderId: "364456736643",
  appId: "1:364456736643:web:3a0c13d9d1708dbd2a68b6",
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { db, auth };
