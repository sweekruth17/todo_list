import React,{useState} from 'react'

export const EditTodoForm = ({editTodo,task}) => {

    const [value,setValue] = useState("");

    const handleSubmit = (e) => {
        // prevent default action
        e.preventDefault();
        if (value) {
            editTodo(value,task.id);
        }
    };
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>

        <input type="text" value ={value} className='todo-input' placeholder='Update Task' onChange={(e) => {
            setValue(e.target.value);
        }}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
