import React, { useContext } from "react"
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from "./pages/Register/Register.jsx"
import { HashRouter, Routes,Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Instruction from "./pages/Instruction/Instruction";
function App() {
  const {currentUser}=useContext(AuthContext)
  // check if their is a users home page else login page
  const ProtectedRoute= ({children})=>{
    if(!currentUser)
    {
      return <Navigate to="/login"/>
    }
    return(
      children
    )
  }
  return (
    
   <HashRouter>
      <Routes>
         <Route path="/">
         <Route index element={
          <ProtectedRoute>
            <Home/>
         </ProtectedRoute>
         }/>
         <Route path="login" element={<Login/>}/>
         <Route path="register" element={<Register/>}/>
         <Route path="instruction" element={<Instruction/>}/>

         </Route>
     </Routes>
   </HashRouter>
    
  );
}


export default App;
