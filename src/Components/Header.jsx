import React, { useEffect } from 'react'
import { LOGO } from "../utils/constants";
import { useNavigate } from 'react-router-dom';
import useSignout from '../Hooks/useSignout';

const Header = () => {
    //logic for handling login middleware
    const navigate = useNavigate();
    const HandleSignout=()=>{
        useSignout();
        navigate('/');
    }
    
 
   
  return (
    <>
    <div className="absolute w-screen px-8 py-2  bg-gradient-to-b from-black z-10 ">
    <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo"  width={120}/>
     </div>
     <button
      onClick={()=>{HandleSignout()}}
     className=' bg-gradient-to-b from-black z-10 border  border-white text-white px-4 py-1 capitalize  mb-0 top-6 absolute right-4 mx-2'>sign out</button>
     </>
  )
}

export default Header