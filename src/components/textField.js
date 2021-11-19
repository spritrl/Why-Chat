import React from 'react';
import TextField from '@mui/material/TextField';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const TextFieldMessage = ({ messageText }) => {

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      let value = document.getElementById('input-textfield');
      if (value.value !== '') {
        const db = firebase.firestore();
        db.collection("ynov-sophia").doc(value.value).set({
          message: value.value,
        })
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
    </div >
  );
};
export default TextFieldMessage;