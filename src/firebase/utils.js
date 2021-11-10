import { initializeApp } from "firebase/app";
import {
  getFirestore,
  serverTimestamp,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, GoogleProvider);

export const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const { uid, displayName, email } = userAuth;

  const userRef = doc(firestore, `users/${uid}`);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    try {
      await setDoc(userRef, {
        displayName,
        email,
        timestamp: serverTimestamp(),
        ...additionalData,
      });
    } catch (err) {
      console.log(
        "🚀 ~ file: utils.js ~ line 31 ~ handleUserProfile ~ err",
        err
      );
    }

    console.log(userRef);
  }

  return userRef;
};
