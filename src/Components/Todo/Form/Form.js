import {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Toast } from 'react-toastify';


const formValues = {id:"",yapılacak:""}

function Form({add,setAdd}) {
        const [form,setForm] = useState(formValues)
// Refreshing the input after the value is entered   
        useEffect(() => {
            setForm(formValues)
        },[add])
// onChange event 
    const onChangeInput = (e) =>  setForm({...form,[e.target.name]: e.target.value})
//onSubmit event and if else area
    const onSubmit = (e) => {
        e.preventDefault()
         if(form.yapılacak === ""){
            toast.error("Lütfen ne yapacağını yaz!")
            return false 
        }  else if(form.yapılacak.length < 3) {
            toast.error("En az 3 karakter olması lazım!")
            return false
        }else {
// form and add state merger             
            setAdd([...add,form])
            toast.success("Eklendi!")
        }
          
    } 
    
   
  return (
    <form onSubmit={onSubmit}>
        <input onChange={onChangeInput} name='yapılacak' value={form.yapılacak} placeholder='Ne yapacaksın ?' />
        <button id='addButton'>+</button>
        <br />
        
    </form>
  )
}

export default Form