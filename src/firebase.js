import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCM4VkhabRXRi7qmVxH-WKmZTgl03G8Wr8",
    authDomain: "linkedin-clone-5ef20.firebaseapp.com",
    projectId: "linkedin-clone-5ef20",
    storageBucket: "linkedin-clone-5ef20.appspot.com",
    messagingSenderId: "469564524356",
    appId: "1:469564524356:web:2c625f0c590348ecef7911"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};