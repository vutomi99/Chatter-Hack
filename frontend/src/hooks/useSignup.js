import { useState } from "react"
import toast from 'react-hot-toast';
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading,setLoading] = useState(false);
    const {setAuthUser}= useAuthContext()

    const signup = async({fullName,username,password,confirmPassword,gender})=>{

        const success = handleInputErrors({fullName,username,password,confirmPassword,gender})

        if(!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup",{
                method: "POST",
                headers:{"content-Type":"application/json"},
                body: JSON.stringify({fullName,username,password,confirmPassword,gender})
            })

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            //store the user to the local storage
            localStorage.setItem("user-info",JSON.stringify(data))
            //update Context
            setAuthUser(data)

              
            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false);
        }

    };
    return {loading,signup};

  
}

export default useSignup

function  handleInputErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName|| !username|| !password|| !confirmPassword || !gender){
        toast.error('All Fields are Required! ')
        return false;
    }

    if(password !== confirmPassword){
        toast.error('Oops!,Passwords do not match')
        return false
    }

    if(password.length< 6){
        toast.error('Password must be at least 6 characters ')
        return false;
    }
return true;
}