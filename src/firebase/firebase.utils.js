import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDwVwY7CqXsFu9higH2apvgoLILnNkXrqQ",
  authDomain: "tacosburritoflamandrose.firebaseapp.com",
  databaseURL: "https://tacosburritoflamandrose.firebaseio.com",
  projectId: "tacosburritoflamandrose",
  storageBucket: "tacosburritoflamandrose.appspot.com",
  messagingSenderId: "664813378957",
  appId: "1:664813378957:web:7aeee4db3f1060f22671c4"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;