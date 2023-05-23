import React, {useState} from 'react'
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';



export const TodoWrapper = () => {
    const [todos,setTodos] = useState([]);


    function addTodo (todo){
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
        console.log(todo);
    }
    const togglecomple = (id) => {
          setTodos(todos.map((todo) => todo.id === id ? {...todo, completed:!todo.completed} : todo))  // ternery operator
    }
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
    const editTodo = id => {
      setTodos(todos.map(todo => todo.id === id ? {...todo , isEditing : !todo.isEditing} : todo));
    }

    const editTask = (task, id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
        )
      );
    }
  

  return (
    <div className='TodoWrapper'>
      <h1>Get things done!!</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo) => ( 
            todo.isEditing ? (<EditTodoForm editTodo = {editTask} task = {todo}  />) : 
            (<Todo 
              task={todo} 
              key={todo.id} 
              toggleComplete={togglecomple}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />)

        ))}
        
    </div>
  );
}

