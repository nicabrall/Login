
import { initializeApp} from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgKmqxY-eEyqyUvS0CWMBRzQPJ2lTfhZE",
  authDomain: "nileanejs.firebaseapp.com",
  projectId: "nileanejs",
  storageBucket: "958241582424",
  messagingSenderId: "958241582424",
  appId: "1:958241582424:web:c812c137e79a440fde892d",
  measurementId: "G-WGJR3FRLY6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app)

export { app, db, auth }