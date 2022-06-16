
import { auth } from '../firebase/congig'
import { signOut } from 'firebase/auth'
import { useAuthContext } from './useAuthContext'

export const useLogout=()=> {
  const {dispatch}=useAuthContext()
  const logout=()=>{
   signOut(auth)
   .then(()=>{
    dispatch({type:"LOGOUT"})
    console.log("user signed out");
   })
   .catch((err)=>{
    console.log(err.message);
   })
  }
  return {logout}
}
