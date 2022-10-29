import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA5u2b6XHYdgt-E0PgEy39foYOPCO9zono",
    authDomain: "my-finance-tracker-c1768.firebaseapp.com",
    projectId: "my-finance-tracker-c1768",
    storageBucket: "my-finance-tracker-c1768.appspot.com",
    messagingSenderId: "981345891008",
    appId: "1:981345891008:web:1cf1b47f68846bf75f3325"
};

firebase.initializeApp(firebaseConfig)

const projectFirebase = firebase.firestore()
const projectAuth = firebase.auth()

export {projectFirebase , projectAuth}