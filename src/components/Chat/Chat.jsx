import React, { useContext, useState} from 'react'
import vediocall from "../../imgs/vediocall.png"
import add from "../../imgs/add.png"
import more from "../../imgs/more.png"
import "./Chat.css"
import Messages from '../Messages/Messages'
import Input from '../Input/Input'

import { ChatContext } from '../../context/ChatContext'
import { AuthContext } from '../../context/AuthContext';

const Chat = () => {

  const[menuOpened,setMenuOpened]=useState(false)
  const {currentUser}=useContext(AuthContext)

  const {data}=useContext(ChatContext)
  const handleClick=()=>{
    setMenuOpened((prev)=>!prev )
  }
  return (


    
<div className='chat' id="chat">


  <div className="chatHeader">
      <span>{data.user?.displayName}</span>
      
      <div className="chatIcons">
      <button className='hamburger' onClick={handleClick}>
         <span style={{color:"white"}}>←</span>
        </button>
        <img src={vediocall} alt="" />
        <img src={add} alt="" />
        <img src={more} alt="" />
        
       
      </div>
  </div>
  <Messages/>
  <Input/>
  </div>)}
export default Chat