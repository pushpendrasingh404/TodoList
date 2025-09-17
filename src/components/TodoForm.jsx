import { useState } from 'react'
import '../App.css'

function TodoForm({onAdd}) {
  const [text, setText] = useState("")
  
  const isValid = (str) => /^[a-zA-Z0-9 _-]+$/.test(str)
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!text.trim()) return;
    if(!isValid(text)) return alert("Only Alphanumeric Values.")
    onAdd(text.trim());
    setText('');
  }
  return (
    <>
     <form onSubmit={handleSubmit} className='todoForm'>
        <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter Task" />
        <button type='submit'>Add</button>
     </form>
    </>
  )
}

export default TodoForm
