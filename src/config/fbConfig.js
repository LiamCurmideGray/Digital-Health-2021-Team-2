// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//Actual Assignment joined DB
// const firebaseConfig = {
//   apiKey: "AIzaSyB3GZlK2Nvk4raEPglVmrWnazDJIe6vVyk",
//   authDomain: "healthapp-9067d.firebaseapp.com",
//   projectId: "healthapp-9067d",
//   storageBucket: "healthapp-9067d.appspot.com",
//   messagingSenderId: "1045863243438",
//   appId: "1:1045863243438:web:d5a246919b37628cf9973f",
//   measurementId: "G-FM4WCD4RG4"
// };

//Mobile TeamA
const firebaseConfig = {
  apiKey: "AIzaSyCNs2vgKOww-9z4prMMEBGh_bqU0AlZJ7Q",
  authDomain: "mobile-team-a.firebaseapp.com",
  projectId: "mobile-team-a",
  storageBucket: "mobile-team-a.appspot.com",
  messagingSenderId: "233720108765",
  appId: "1:233720108765:web:c1ff51793c8afe846f2d34",
  measurementId: "G-EZ05HWJHTX"
};


//Personal DB
/*
const firebaseConfig = {
  apiKey: "AIzaSyB3GZlK2Nvk4raEPglVmrWnazDJIe6vVyk",
  authDomain: "healthapp-9067d.firebaseapp.com",
  projectId: "healthapp-9067d",
  storageBucket: "healthapp-9067d.appspot.com",
  messagingSenderId: "1045863243438",
  appId: "1:1045863243438:web:d5a246919b37628cf9973f",
  measurementId: "G-FM4WCD4RG4"
};
*/


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
// firebase.firestore().settings({timestampsInSnapshots: true});

export default {app, db};