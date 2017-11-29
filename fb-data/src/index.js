import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyCzoXojCeUIMeKicHvi_c2xgLtG9n4anfQ",
    authDomain: "tasks-demo-2c868.firebaseapp.com",
    databaseURL: "https://tasks-demo-2c868.firebaseio.com",
    projectId: "tasks-demo-2c868",
    storageBucket: "tasks-demo-2c868.appspot.com",
    messagingSenderId: "963072267387"
};
firebase.initializeApp(config);

firebase.auth().signInAnonymously()
    .then(() => {
        ReactDOM.render(<App />, document.getElementById('root'));
        registerServiceWorker();
    })
    .catch( err=> {
        alert(err.message);
    });
