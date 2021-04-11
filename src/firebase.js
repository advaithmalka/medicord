import firebase from "firebase";
import "firebase/storage";
import { FIREBASE_CONFIG } from "./config";
const app = firebase.initializeApp(FIREBASE_CONFIG);

export const firerage = app.storage();
export default app;
