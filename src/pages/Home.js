import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import {useCollection} from "../hooks/useCollection"
import { useAuthContext } from '../hooks/useAuthContext'


export default function Home() {
  const {user}=useAuthContext()
  const {documents:books}=useCollection("books",
  ["uid","==" ,user.uid]
  
  )


  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}




  // not real time database:
// useEffect(() => {
// const ref = collection(db,"books")
// geting docs method
// getDocs(ref)
 // promise spreading and pushing in the array coming from firestore collection
//  .then((snapshot)=>{
//   let results =[]
//   snapshot.docs.forEach((doc)=>{
//     results.push({id:doc.id, ...doc.data()})
//   })
   // updating the satate
//   setBooks(results)
//  })
// }, [])



