import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {

    const [value,setValue] = useState("");

    const handleSubmit = (e) => {
        // prevent default action
        e.preventDefault();
        if (value) {
            addTodo(value);
            // clear form after submission
            setValue('');
        }
    };
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value ={value} className='todo-input' placeholder='Enter your task..' onChange={(e) => {
            setValue(e.target.value);
        }}></input>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}


