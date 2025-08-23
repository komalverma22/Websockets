

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [ws,setWs]=useState()
  function sendMessage(){
    // console.log("hiii");
    
ws.send("ping");

  }

  useEffect(()=>{
const ws=new WebSocket("ws://localhost:8080");
setWs(ws)
ws.onmessage=(e)=>{
  console.log(e.data);
  
}
  },[])

  return (
   <div>
    <input type="text" placeholder='send message' />
    <button onClick={sendMessage}>send message</button>
   </div>
  )
}

export default App
