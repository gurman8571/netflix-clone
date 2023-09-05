import React, { useEffect } from 'react'
import { LOGO } from "../utils/constants";
import { useNavigate } from 'react-router-dom';
const Header = () => {
    //logic for handling login middleware
    const navigate = useNavigate();
   useEffect(() => {
  
    if (localStorage.getItem("token") === null) {
        
     navigate("/")   
    }
    else{
navigate("/browse")
    }
   }, [])
   
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 ">
    <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo"  width={120}/>

  </div>
  )
}

export default Header