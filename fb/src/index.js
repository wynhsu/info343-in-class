import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyC_1VeaPTW3O4NAag3X9zMPQjFcDWzfwaU",
    authDomain: "info343-demo-3336a.firebaseapp.com",
    databaseURL: "https://info343-demo-3336a.firebaseio.com",
    projectId: "info343-demo-3336a",
    storageBucket: "info343-demo-3336a.appspot.com",
    messagingSenderId: "334228928781"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
