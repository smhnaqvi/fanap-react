import firebase from "firebase/app"
import config from "config"
import "firebase/database";
import "firebase/auth";
import "firebase/storage";


firebase.initializeApp(config.firebase);
export const auth = firebase.auth();
export const storage = firebase.storage();
export const db = firebase.database();