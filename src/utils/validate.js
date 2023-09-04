

export const validateLogin  = (email,password) => {

    if (email==="" ) {
     return "Email is Required for login"   
    }
    if(password === ""){
        return "Password is Required for login"   
     }
     const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
        email
      );
      if(!isEmailValid) return "Email ID is not valid";
        
      return null;
}
 

