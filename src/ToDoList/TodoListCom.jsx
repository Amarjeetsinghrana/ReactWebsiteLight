import React from 'react'


const TodoListCom =(props)=>{

    
    return(
        <>
            <div className="todo_style">
            <button onClick={()=>{
                props.onselect(props.id)
            }}>D</button>
            <li>{props.text}</li>
            </div>
        </>
    );
       
}
export default TodoListCom;