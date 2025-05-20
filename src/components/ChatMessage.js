import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-start shadow-sm p-2'>
      <img
        className='h-8 w-8 mr-2'
        alt='user'
        src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg'
      />
      <div className='flex flex-col'>
        <span className='font-bold'>{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
