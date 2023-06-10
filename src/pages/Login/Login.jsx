import React from 'react'
import { useState } from 'react'
import { auth } from "../../firebase" 
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css"
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

 
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit=async(e)=> {
      e.preventDefault()
  
  
      const { eMail, passWord } = e.target
  
      const email = eMail.value;
      const password =passWord.value;
  
      try {
       await signInWithEmailAndPassword(auth, email, password) 
       navigate("/")
      }
      catch (err) {
        setErr(true)
      }
    };

  return (
    <div className="formContainer" >
    <div className="formWrapper" >
        <span className="logo">ChitChat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
           
            <input type="email" placeholder='email' name="eMail"/>
            <input type="password" name="passWord" placeholder='password' />
           
            <button>Sign in</button>
            {err && <span>something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register"> Register</Link></p>
    </div>
    <Link to="/instruction"><button className='inst'>Instruction</button></Link>
   </div>
  );
};

export default Login