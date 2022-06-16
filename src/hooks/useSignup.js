import { useState } from "react"
// firebase imports
import { auth } from "../firebase/congig"
import {createUserWithEmailAndPassword } from "firebase/auth"
import { useAuthContext } from './useAuthContext'


export const useSignup =()=>{
    const {dispatch}=useAuthContext()
    const [error,setError]=useState(null)
    const signup = (email,password)=>{
        setError(null)
        createUserWithEmailAndPassword(auth,email,password)
        .then((response)=>{
            dispatch({type:"LOGIN",payload:response.user})
            console.log("user signed in",response.user);
        })
        .catch((err)=>{
            setError(err.message)
        })
        
       
        }
    return {error,signup}
}