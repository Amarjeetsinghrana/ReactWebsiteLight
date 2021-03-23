import react, { useState } from 'react'
import "../ToDoList/ToDoList.css"
import  TodoListCom from './TodoListCom'

const ToDoList = () => {

    const [inputList, setInputList]=useState(" ");
    const [items,setItems]=useState([]);

    const inputEvent=(event)=>{
        setInputList(event.target.value);
    };

    const listItems=()=>{
        setItems((oldItems)=>{
            return[...oldItems,inputList]
        })
        setInputList("")
    }
    const deletItems=(id)=>{
        console.log('delet');

        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !==id;
            })
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="Add a item" onChange={inputEvent} value={inputList} />
                    <button className="btn"onClick={listItems}> + </button>
                    <ol>
                        {/* <li>{inputList}</li> */}
                        {items.map((itemVal , index)=>{
                          return <TodoListCom text={itemVal}
                              id={index}
                              key={index}
                              onselect={deletItems}
                          />
                        })}
                        
                    </ol>
                </div>
            </div>
        </>
    );
}
export default ToDoList;