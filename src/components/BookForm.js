import { useState } from 'react'
import {db} from "../firebase/congig"
import { collection,addDoc } from 'firebase/firestore'
import { useAuthContext } from '../hooks/useAuthContext'

export default function BookForm() {
  const [newBook, setNewBook] = useState('')
  //user wont be null when we will login
  const {user}=useAuthContext()
  const handleSubmit = async (e) => {
    e.preventDefault()
    // const ref =collection(db,"books")
    await addDoc(collection(db,"books"),{
      title:newBook,
      uid:user.uid
    })
    console.log(newBook)

    setNewBook('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input 
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  )
}
