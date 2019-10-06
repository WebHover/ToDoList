import app from 'firebase/app';
import 'firebase/auth'
import 'firebase/database';


const config = {
    apiKey: "AIzaSyBYPd9lrk2EFgfjSMwCgzST5we2TtIWD54",
    authDomain: "todolist-3ea89.firebaseapp.com",
    databaseURL: "https://todolist-3ea89.firebaseio.com",
    projectId: "todolist-3ea89",
    storageBucket: "",
    messagingSenderId: "894635713871",
    appId: "1:894635713871:web:4ffb04638326a9a7da513a",
    measurementId: "G-NMM3VEXRJK"
}

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

}

export default Firebase;