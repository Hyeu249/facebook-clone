import { initializeApp } from "firebase/app";
import { getStorage, ref as sref, uploadString } from "firebase/storage";
import {
  getDatabase,
  ref,
  onDisconnect,
  set,
  onValue,
  update,
  get,
  child,
  push,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAUJf2BUi6iCth0oLJgUtQVaVMYBboIKUE",
  authDomain: "facebook-clone-ca6f6.firebaseapp.com",
  databaseURL:
    "https://facebook-clone-ca6f6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "facebook-clone-ca6f6",
  storageBucket: "facebook-clone-ca6f6.appspot.com",
  messagingSenderId: "746520961617",
  appId: "1:746520961617:web:e78956ff084a6e5c890e70",
  measurementId: "G-JKMB7MFLF3",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getDatabase();
const storage = getStorage();

export {
  storage,
  sref,
  uploadString,
  ref,
  onDisconnect,
  set,
  onValue,
  update,
  get,
  child,
  push,
};
export default db;
