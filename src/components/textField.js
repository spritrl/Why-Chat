import React from 'react';
import { TextField, Button } from '@mui/material/';
import ReactDOM from "react-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const TextFieldMessage = ({ messageText }) => {

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      let value = document.getElementById('input-textfield');
      if (value.value !== '') {
        let newMessage = value.value
        value.value = '';
        const db = firebase.firestore();
        db.collection("ynov-sophia").doc(newMessage).set({
          message: newMessage,
        });
      }
    }
  }

  return (
    <div
      style={{
        marginTop: 20,
        marginLeft: 20,
        width: '35%',
      }}
    >
      <TextField
        fullWidth
        id="input-textfield"
        label="Message"
        variant="outlined"
        onKeyDown={handleKeyDown}
      />
      <Button
        fullWidth
        style={{
          marginTop: 5,
        }}
        variant="outlined"
        onClick={() => window.location.reload(false)}
      >
        Refresh
      </Button>
    </div >
  );
};
export default TextFieldMessage;