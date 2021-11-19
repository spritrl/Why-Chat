import React, { useEffect, useState } from 'react';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import Message from './components/message';
import TextFieldMessage from './components/textField';

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
      <div style={{ marginTop: 30 }}>
        {messageList.map((message) => (
          <Message messageText={message.message}></Message>
        ))}
        <TextFieldMessage />
      </div>
    </div >
  );
}

export default App;
