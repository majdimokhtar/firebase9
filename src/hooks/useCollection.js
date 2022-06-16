import { useState,useEffect,useRef } from "react";
import {db} from "../firebase/congig"
// firebase import
import { collection,onSnapshot,query,where } from "firebase/firestore";

export const useCollection = (c,_q) => {
    const [documents,setDocuments]=useState(null)

    // setup the query to not cause infinit loop
    const q = useRef(_q).current

    useEffect(()=>{
      let ref = collection(db, c)
      if (q) {
        ref = query(ref,where(...q))
      }
    
    const unsub = onSnapshot(ref,(snapshot)=>{
        let results =[]
        snapshot.docs.forEach((doc)=>{
        results.push({id:doc.id, ...doc.data()})
  })
//    updating the satate
      setDocuments(results)
    })
    return ()=>unsub()
    },[c])
 return {documents}
}
