import React, { useState } from 'react'
import { LOGO, user_API_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { addUser } from "../utils/Slices/UserSlice";
import { useNavigate } from 'react-router-dom';


 const Form1 = () => {
const Stored_email=useSelector((store) => store.SignUp.email);
const dispatch=useDispatch();
const navigate=useNavigate();
const [email, setemail] = useState(Stored_email)
const [name, setname] = useState("")
const [password, setpassword] = useState("")
const [error, seterror] = useState([]);


const register=async(e)=>{

e.preventDefault();
seterror("");
try {
const res=await axios.post(`${user_API_URL}/`,{
email: email,
password:password,
name:name,

});
if(res.data.code !== 200){
    seterror(res.data.error)
}
else{
    //console.log(res.data);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user_id", res.data._doc._id);
    dispatch(addUser(res.data._doc))
    navigate('/signup/paymentPicker')

}
} catch (error) {
seterror(error);
}

}

return (
<>
    <div className="absolute w-screen px-8 py-2  ">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" width={120} />
        <hr />

        <div className='flex justify-center my-12 w-auto '>
            <div>
                <p className='text-left font-bold'>STEP 1 OF 3</p>
                <p className='font-bold text-4xl mt-1'>Create a password to start
                </p>
                <p className='font-bold text-4xl my-1'> your membership
                </p>

                <p className='text-xl mt-4'>Just a few more steps and you're done!
                </p>
                <p className='text-xl '>
                    We hate paperwork, too.</p>
                <form className='my-5 ' onSubmit={(e)=>{register(e)}}>
                    <input type="text" onChange={(e)=>setname(e.target.value)}
                    className="capitalize placeholder-red-500 border border-red-500 p-3 my-4 rounded-md w-full "
                    placeholder='Username' />
                    <br />
                    <input type="email" name="" value={email} onChange={(e)=>setemail(e.target.value)}
                    className= "capitalize placeholder-red-500 border border-red-500 p-3 rounded-md w-full" placeholder='email' />
                  {error? <span className='text-red-500 font-bold  text-sm'>{error}</span>:<></>}
                    <br />
                    <input type="password" onChange={(e)=>setpassword(e.target.value)}  
                    className= "my-4 capitalize placeholder-red-500 border border-red-500 p-3 rounded-md w-full"
                    placeholder='Add a password' />
                    <br />
                    <button
                        className=" capitalize bg-red-700 border my-2 text-white border-red-500 p-4 rounded-sm text-2xl w-full ">
                        Next
                    </button>

                </form>
            </div>
        </div>
    </div>


</>
)
}
export default Form1