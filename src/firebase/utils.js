import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  serverTimestamp,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseConfig } from './config';

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

export const registerUser = async (formData) => {
  const { user } = await createUserWithEmailAndPassword(
    auth,
    formData.email,
    formData.password
  );

  await handleUserProfile(user, formData.displayName);
};

export const login = async (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

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
        '🚀 ~ file: utils.js ~ line 31 ~ handleUserProfile ~ err',
        err
      );
    }

    console.log(userRef);
  }

  return userRef;
};
