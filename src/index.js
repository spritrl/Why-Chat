import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDeTJMIiyIEByacSXjxZYSWGwXU9pzZkrw",
  authDomain: "why-chat-f7b2f.firebaseapp.com",
  projectId: "why-chat-f7b2f",
  storageBucket: "why-chat-f7b2f.appspot.com",
  messagingSenderId: "938066553390",
  appId: "1:938066553390:web:7915ab1d5734ade2864dbf"
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
