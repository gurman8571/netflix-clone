import Header from "./Header";
import { BG_URL} from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { addemail } from "../utils/Slices/SignUpSlice";



const SignUp = () => {

    const email = useRef("");
    const navigate=useNavigate();
  const dispatch=useDispatch();
  const HandleClick=()=>{
    dispatch(addemail(email.current.value));
    navigate("/signup/regform")
  }

return (
<div>
    <Header />
    <div className="">
    <div className="absolute bg-gradient-to-b from-black ">
        <img className="h-screen w-screen object-cover" src={BG_URL} alt="logo" />

    </div>
    <div
        className="  text-white rounded-lg bg-opacity-80   text-center shadow-md  px-16  mx-auto right-0 left-0 absolute    p-12  h-auto  my-64 ">

        

     <p className="text-2xl lg:text-5xl md:text-5xl text-white font-extrabold lg:mx-28 md:mx-28 mx-0">Unlimited movies, TV shows and more
</p>
<p className=" my-4 lg:text-2xl md:text-2xl  text-md ">Watch anywhere. Cancel anytime.</p>
<p className="my-4 lg:text-xl md:text-xl  text-sm ">Ready to watch? Enter your email to create or restart your membership.</p>
       <div className="my-4 flex justify-center ">
        <input ref={email} type="text" className="bg-gray-800 opacity-60 
        focus:outline-none border  w-4/12 border-white py-2 px-2 placeholder-gray-300 capitalize " 
        placeholder="email address" />
        <button 
        onClick={HandleClick}
        className="font-bold  text-2xl w-2/12 mx-2 py-4  bg-red-700 rounded-md" >
           Get Started {">"}
           
</button>

       </div>
        
    </div>

</div>
</div>
);
};
export default SignUp;
