import React , {useState} from 'react';
import Todoform from './Todoform';

function Todolist(){
    const [todos, setTodo]=useState( [] );
    const addTodo=todo=>{
        if(todo.text|| /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos=[todo,...todos];
        setTodos(newTodos);
        console.log(...newTodos);
    };
  return (

   <div>

   <h1>jndjdn</h1>

  <Todoform onSubmit={addTodo}/>


  </div>

  );
}
export default Todolist;