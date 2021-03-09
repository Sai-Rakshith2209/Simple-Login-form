import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB-MEsjD-Q3cZskhQDxmw3uZ8_PHnaIw3w",
  authDomain: "login-7d17b.firebaseapp.com",
  projectId: "login-7d17b",
  storageBucket: "login-7d17b.appspot.com",
  messagingSenderId: "279933013485",
  appId: "1:279933013485:web:875612ff9991bc3274abe4",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
