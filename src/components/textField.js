import React from 'react';
import TextField from '@mui/material/TextField';

const TextFieldMessage = ({ messageText }) => {

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      let value = document.getElementById('input-textfield');
      if (value.value !== '') {
        console.log('Value = ', value.value)
      } else {
        console.log('Value is null')
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