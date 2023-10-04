import React, { useState } from 'react'
 function  Todoform(props)  {
    const[input, setInput] = useState('');
    const handleChange=e=>{
        setInput(e.target.value);
    };
    const handlesubmit= e=> {
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()=10000),
            text:input
        });
        setInput('');
    };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
    
<input type ='text'
placeholder='add a note'
value={input}
name='text'
classname='todo-input'/>
  onChanges{handleChanges}
   <button className='todo-button'> add todo </button>
    </form>
  );
  }
export default Todoform;