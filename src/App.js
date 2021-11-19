import React, { useEffect, useState } from 'react';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

function App() {
  const initialValue = [
    { message: "" }];

  const [messageList, setMessageList] = useState(initialValue);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('ynov-sophia')
      .get()
      .then(querySnapshot => {
        const documents = querySnapshot.docs.map(doc => doc.data())
        setMessageList(documents);
      })
  }, []);

  return (
    <div className="App">
      {messageList.map((message, index) => (
        <p key={message.message}>{message.message}</p>
      ))}
    </div >
  );
}

export default App;
