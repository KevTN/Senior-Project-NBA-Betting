const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: 'AIzaSyC3MH-sM-GWN_v3pH9DCdEcweWLCHzYbqI',
  authDomain: "bestbucketbets.firebaseapp.com",
  projectId: "bestbucketbets",
  storageBucket: "bestbucketbets.appspot.com",
  messagingSenderId: "671250228071",
  appId: "1:671250228071:web:96a9ad993e767c44cbc5c2",
  measurementId: "G-9X2PE7B4LS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db, collection, addDoc };