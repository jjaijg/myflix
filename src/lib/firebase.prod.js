import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBjrPBJiidbe8vjothKRnbmO5I_wp8-DKk",
  authDomain: "react-myflix.firebaseapp.com",
  databaseURL: "https://react-myflix.firebaseio.com",
  projectId: "react-myflix",
  storageBucket: "react-myflix.appspot.com",
  messagingSenderId: "41892993406",
  appId: "1:41892993406:web:21c4b3386e01c349c1fb2f",
  measurementId: "G-V86JJEED8N",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
