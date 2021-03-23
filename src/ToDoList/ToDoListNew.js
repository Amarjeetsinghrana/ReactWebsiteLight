
import { Add } from '@material-ui/icons'
import Button from '@material-ui/core/Button';
import React, { useState } from 'react'
import List from './List'


const ToDoListNew=()=>{

    const [item,setItem]=useState("hii");
    const [newitem,setNewitem]=useState([]);


    const itemEvent=(event)=>{
        setItem(event.target.value);
    }

    const listItem=()=>{
        setNewitem((prevalue)=>{
            return[...prevalue,item]
        })
        setItem("  ");
    }

    return(
        <>
            <h1>To Do List</h1>

            <input type='text' placeholder="Add an item " value={item} onChange={itemEvent}/>
            <Button onClick={listItem}>
                <Add />
            </Button>
            <ol>
            {/* <li>{item}</li> */}
            {    newitem.map((val) =>{
                    return <List text={val}/>
                })}
            </ol>
        </>
    );
}
export default ToDoListNew;