import React, { useState,useContext } from 'react'
import Navbar from "../Navbar/Navbar"
import Search from "../Search/Search"
import Chats from "../Chats/Chats"
import Input from '../Input/Input'
import Messages from '../Messages/Messages'
import vediocall from "../../imgs/vediocall.png"
import add from "../../imgs/add.png"
import more from "../../imgs/more.png"
import "./Sidebar.css"
import { ChatContext } from '../../context/ChatContext'


const Sidebar = () => {

  const[menuOpened,setMenuOpened]=useState(false)

  const {data}=useContext(ChatContext)

  const handleClick=()=>{
    setMenuOpened((prev)=>!prev )
  }

  return (
  <div>
  {menuOpened===false?(
  <div className='sidebar'>
      

      <div className="navContainer">
          <Navbar/>
          <button className='hamburger' onClick={handleClick}>
          view chat
          </button>
      </div>
      
      <Search/>
      <Chats/>
</div>)
:(
        <div className='view2'>
      <div className="chatHeader">
      <button className='hamburger' onClick={handleClick}>
         ←
        </button>
      <span>{data.user?.displayName}</span>
      
      <div className="chatIcons">
      
      
        <img src={vediocall} alt="" />
        <img src={add} alt="" />
        <img src={more} alt="" />
        
        
     </div>
      
    </div>
  <Messages/>
  <Input/>
  </div>)}
</div>

    
  )
}
export default Sidebar