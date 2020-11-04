import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBGyjOgsezVuiHwwprS0x7fkVJSvHtZlkQ",
  authDomain: "fashioncart-fa608.firebaseapp.com",
  databaseURL: "https://fashioncart-fa608.firebaseio.com",
  projectId: "fashioncart-fa608",
  storageBucket: "fashioncart-fa608.appspot.com",
  messagingSenderId: "477653891305",
  appId: "1:477653891305:web:d3e549a3a0369b9e4a9878"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
