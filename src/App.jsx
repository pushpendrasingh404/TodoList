import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'


function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask=(text)=>{
    const newTask={
      id:Date.now(),
      text,
      completed:false,
    };
    setTasks((prevState)=> [...prevState, newTask])
  }

  const deleteTask=(id)=>{
    setTasks((prev)=>prev.filter((item)=>item.id !== id))
  }

  const editTask=(id, newText)=>{
    setTasks((prev)=>prev.map((item)=>(item.id === id ? {...item, text:newText} : item)))
  }

  const toggleTask=(id)=>{
    setTasks((prev)=> prev.map((item)=>item.id===id ? {...item, completed:!item.completed} : item))
  }

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks])

  useEffect(()=>{
    const storedData=localStorage.getItem("tasks");
    if(storedData){
      setTasks(JSON.parse(storedData))
    }
  },[])
  console.log(tasks)
  return (
    <>
      <h2>Todo List Example</h2>
      <TodoForm onAdd={addTask}/>
      {tasks.map((task)=>(
        <TodoItem key={task.id} task={task} onDelete={deleteTask} onEdit={editTask} onToggle={toggleTask}/>
      ))}
    </>
  )
}

export default App
