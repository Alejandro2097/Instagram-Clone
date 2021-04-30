import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

//here i want to import the seed file
//import { seedDatabase } from '../seed';
const config = {
    apiKey: "AIzaSyAHiVzxSb2TI25bAjFoE5InEAst3gv501o",
    authDomain: "instagram-yt-ac376.firebaseapp.com",
    projectId: "instagram-yt-ac376",
    storageBucket: "instagram-yt-ac376.appspot.com",
    messagingSenderId: "946249639393",
    appId: "1:946249639393:web:bd367b0dfbdae43bcb9ea0"
};

const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;


//Here is where i want to call the seed file (only ONCE!)
//seedDatabase(firebase);

console.log('firebase', firebase);

export {firebase, FieldValue}