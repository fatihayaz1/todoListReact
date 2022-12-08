import {useState, useEffect} from 'react'
import List from './List/List'
import Form from './Form/Form'
// Toastify is alert libary
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css"
function Todo() {
const [add,setAdd] = useState([])

// list item delete function
const deleteTodo = (id) => {
  setAdd(add.filter((todo,index)=> index !== id))
}

  return (
    <div id='container'>
      <h1>TODO LİST</h1>
<br />
<Form add={add} setAdd={setAdd} />
<br />
<List deleteTodo={deleteTodo} add={add} />
<ToastContainer />
    </div>
  )
}

export default Todo