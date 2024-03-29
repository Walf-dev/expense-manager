import * as firebase from "firebase";

/*
const config = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: "expense-manager-react.firebaseapp.com",
    databaseURL: "https://expense-manager-react.firebaseio.com",
    projectId: "expense-manager-react",
    storageBucket: "expense-manager-react.appspot.com",
    messagingSenderId: "847044394910"
};
*/

const config = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: "money-management-f57f8.firebaseapp.com",
    databaseURL: "https://money-management-f57f8-default-rtdb.firebaseio.com",
    projectId: "money-management-f57f8",
    storageBucket: "money-management-f57f8.appspot.com",
    messagingSenderId: "378725776428"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { auth, db };
