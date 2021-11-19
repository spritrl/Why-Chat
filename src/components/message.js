import React from 'react';

const Message = ({ messageText }) => {
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(to right, #606c88 0%, #606c88 100%)',
        marginTop: 5,
        marginLeft: 20,
        padding: 10,
        width: '30%',
        borderRadius: 10,
      }}
    >
      <h1>{messageText}</h1>
    </div >
  );
};
export default Message;