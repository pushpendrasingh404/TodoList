import '../App.css'

function TodoItem({task, onDelete, onEdit, onToggle}) {
  
    const handleEdit=()=>{
        const newText=prompt("Edit Task", task.text);
        if(!/^[a-zA-Z0-9 _-]+$/.test(newText)){
            alert("Invalid characters.")
            return;
        }
        if(window.confirm("Are you sure you want to update rths task?")){
            onEdit(task.id, newText.trim());
        }
    }
  return (
        <div className='todoItem'>
            <div className='itemText'>
                <input type='checkbox' onChange={()=> onToggle(task.id)} />
                <span style={{textDecoration:task.completed ? "line-through":"none"}}>{task.text}</span>
            </div>
            <div className='btngroup'>
                <button onClick={handleEdit}>Edit</button>
                <button className='delete' onClick={()=>window.confirm("Delete Task?") && onDelete(task.id)}>Delete</button>
            </div>
        </div>
  )
}

export default TodoItem
