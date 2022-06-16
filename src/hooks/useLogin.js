import { useState } from "react"
// firebase imports
import { auth } from "../firebase/congig"
import {signInWithEmailAndPassword } from "firebase/auth"
import { useAuthContext } from "./useAuthContext"


export const useLogin =()=>{
    const [error,setError]=useState(null)
    const {dispatch}=useAuthContext()
    const login = (email,password)=>{
        setError(null)
        signInWithEmailAndPassword(auth,email,password)
        .then((response)=>{
            dispatch({type:"LOGIN",payload:response.user})
            console.log("user logged in",response.user);
        })
        .catch((err)=>{
            setError(err.message)
        })
        
       
        }
    return {error,login}
}