import React from 'react'
import { toast } from 'react-toastify'
function List({add,deleteTodo,id}) {
 // Map metod and function create list item. and delete button work onclick event.
  return (
    <div>
        <ul id='liste'>
            {add.map((ad,index)=> <li key={index}>{ad.yapılacak}
            <button onClick={() => {deleteTodo(index)
            toast.error("Silindi!")
            }}  id='deleteButton'>X</button></li>)}
            
        </ul>
    </div>
  )
}

export default List