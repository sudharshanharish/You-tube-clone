import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';

const LiveChat = () => {
    const [Livemessage,setLiveMessage] = useState();

    const dispatch = useDispatch();

    const ChatMessages = useSelector((store)=>store.chat.messages)

    useEffect(()=>{
        const i = setInterval(()=>{
            console.log("API Polling")
        dispatch(addMessage({
            name : "Sudharshan",
            message : "Hello this is a beginning 🚀🚀"
        }))
    },1500);
    return () => clearInterval(i);
    },[]);


  return (
    <>
<div className="w-[400px] h-[600px] ml-2 p-4 border border-gray-300 rounded-lg bg-white shadow overflow-y-scroll flex-col-reverse">
{ChatMessages.map((c)=>(
<ChatMessage name = {c.name} message={c.message}/>
))}



</div>
<form className='w-full p-2 ml-2 border border-black'
onSubmit={(e) => {
  e.preventDefault();
  console.log('On submit');
  dispatch(addMessage({
    name : "Sudharshan",
    message : Livemessage,
  }))
 setLiveMessage("");
}}>
  <input className='w-96 px-2' type='text' value={Livemessage} 
  onChange={(e)=> {
    setLiveMessage(e.target.value);
  }}/> 
  <button className='px-2 mx-2 bg-green-400' >Send Message</button>
</form>
</>

  )
}

export default LiveChat