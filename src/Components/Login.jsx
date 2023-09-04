import Header from "./Header";
import { BG_URL} from "../utils/constants";
import { useState ,useRef} from "react";
import {validateLogin} from '../utils/validate'
const Login = () => {
const [readmore, setreadmore] = useState(false)
//const [email, setemail] = useState("second")
const email = useRef("");
const password = useRef("");
const [error, seterror] = useState("")

const login = (e)=>{
e.preventDefault();
const error =validateLogin(email.current.value,password.current.value);

if(error !== null){
seterror(error);
console.log(error);
return;
}
else{
    seterror("");
    console.log(password.current.value,email.current.value);
}
}
return (
<div>
    <Header />
    <div className="absolute">
        <img className="h-screen w-screen object-cover" src={BG_URL} alt="logo" />

    </div>
    <form
        className=" bg-black rounded-lg bg-opacity-80  shadow-md  px-16 mx-auto lg:right-0 lg:left-0 absolute   w-full md:w-1/3 p-12  h-auto  my-24 ">

        <h2 className=" m-1 font-bold text-3xl text-white">Sign In </h2>
        <br />
        <input placeholder="Email or phone" type="text" name="username"
           ref={email}
            className=" focus:outline:none py-3 px-4 my-4 text-white bg-gray-600 w-full  bg-opacity-60 rounded-md border-b-2 border-yellow-500 "
            id="" />
        <input placeholder="Password" type="password" name="password"
         ref={password}
            className="py-3  px-4 text-white my-4 bg-gray-600 w-full  bg-opacity-60 rounded-md border-b-2 border-yellow-500 "
            id="" />
        <br />
        <p className="text-red-500 font-bold text-lg py-2">{error}</p>
     
        <button className="bg-red-600 text-md px-3  py-4 w-full
        
        text-white rounded-md mt-4 font-bold "
        onClick={(e)=>login(e)}
        >Sign in</button>

        <br />
        <div className="my-2">
            <div className="flex items-center justify-between">
                <div>
                    <label className="block" htmlFor="remember">
                        <input className="ml-2 leading-tight" type="checkbox" id="remember" name="remember" />
                        <span className="text-sm px-1  text-gray-400">Remember me</span>
                    </label>
                </div>
                <div>
                    <a className=" text-sm text-gray-400" href="#password-request">
                        Need Help?
                    </a>
                </div>
            </div>
        </div>

        <div className="text-gray-500 mt-3">
            <p className="mb-1 mx-2">New to Netflix? <span className="text-gray-100  font-lighttext-md cursor-pointer">Sign up
                    now</span>.</p>
            <p className="text-xs mt-2 mx-2">This page is protected by Google reCAPTCHA to ensure you're not a bot.
                <span className="text-sm text-blue-500 cursor-pointer" onClick={()=>{setreadmore(!readmore)}}>{!readmore
                    && "Learn more."}</span>
            </p>

            {readmore && <p className="mx-2 mt-2 text-xs">The information collected by Google reCAPTCHA
                is subject to the <a rel="noreferrer" className="text-blue-500" target="_blank"
                    href="https://policies.google.com/privacy">Google Privacy Policy </a>and <a rel="noreferrer"
                    target="_blank" className=" text-blue-500" href="https://policies.google.com/terms">Terms of
                    Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for
                general security purposes (it is not used for personalised advertising by Google).</p>}
        </div>
    </form>

</div>
);
};
export default Login;
