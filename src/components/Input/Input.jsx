import React, { useState ,useContext } from 'react'
import "./Input.css"
import Attach from "../../imgs/attach.png"
import Img from "../../imgs/img.png"
import { serverTimestamp, Timestamp, updateDoc ,arrayUnion } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { AuthContext } from '../../context/AuthContext'
import {ChatContext} from "../../context/ChatContext"
import { db } from "../../firebase"
import { doc } from "firebase/firestore";
import { storage } from "../../firebase"
const Input = () => {

const [text,setText]=useState("")
const [img,setImg]=useState(null)
const[err,setErr]=useState();
const [loading, setLoading] = useState(false);
  const {currentUser}=useContext(AuthContext)
  const {data}=useContext(ChatContext)
 
const handleSend=async()=>{
   if(img){
    setLoading(true);
    try{
// Create a reference to 'image' you want to send
const storageRef = ref(storage, uuidv4());
// upload file / profile_image
await uploadBytesResumable(storageRef, img).then(
  
  () => {
    // Handle successful uploads on complete
    getDownloadURL(storageRef).then(async(downloadURL) =>{
      try{
      await updateDoc(doc(db,"chats",data.chatId),{
        messages:arrayUnion({
          id:uuidv4(),
          senderId:currentUser.uid,
          date:Timestamp.now(),
          img:downloadURL
        })
      })



      await updateDoc(doc(db,"userChats",currentUser.uid),{
        [data.chatId + ".lastMessage"]:{
          
          text:"📖image"
          
        },
        
      [data.chatId + ".date"]: serverTimestamp()
      })
      
      await updateDoc(doc(db,"userChats",data.user.uid),{
        [data.chatId + ".lastMessage"]:{
          text:"📖image"
        },
        
      [data.chatId + ".date"]: serverTimestamp()
      })



    }
    catch(err){
      setErr(true)
    }
  })
  })
}

catch (err) {
  setErr(true);
  setLoading(false);
}

   }

   
   else{
     await updateDoc(doc(db,"chats",data.chatId),{
      messages:arrayUnion({
        id:uuidv4(),
        text,
        senderId:currentUser.uid,
        date:Timestamp.now(),
      })
     })
   
   await updateDoc(doc(db,"userChats",currentUser.uid),{
    [data.chatId + ".lastMessage"]:{
      
      text
      
    },
    
  [data.chatId + ".date"]: serverTimestamp()
  })
  
  await updateDoc(doc(db,"userChats",data.user.uid),{
    [data.chatId + ".lastMessage"]:{
      text
    },
    
  [data.chatId + ".date"]: serverTimestamp()
  })
}
     
setText("")
setImg(null)
}
const handleKey=(e)=>{
  e.code==="Enter" && handleSend()
}  
  return (
<div className="input">
<input 
type="text" 
placeholder='Type something...'  
onChange={e=>setText(e.target.value)}  
value={text}
onKeyDown={handleKey}

/>
<div className="send">
  <img src={Attach} alt="" />
  <input 
  type="file" 
  id='file' 
  style={{display:"none"}}  
  onChange={e=>setImg(e.target.files[0])} />
  <label htmlFor="file">
    <img className="selectImg" src={Img} alt="" />
  </label>
  <button  onClick={handleSend}>send</button>
</div>
 
</div>
  )
  }

export default Input