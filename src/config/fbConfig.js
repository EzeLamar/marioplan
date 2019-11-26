
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyDDYp3ED8Br8TO7xWd_ROErdhVN2SCJQEg",
    authDomain: "net-ninja-marioplan-41abf.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-41abf.firebaseio.com",
    projectId: "net-ninja-marioplan-41abf",
    storageBucket: "net-ninja-marioplan-41abf.appspot.com",
    messagingSenderId: "909936247087",
    appId: "1:909936247087:web:ceeeb22ae43d1df492e1da",
    measurementId: "G-E4XQW7H4QS"
  };
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();
//firebase.firestore().settings({ timestampsInShots:true })

export default firebase;
