import { useState } from "react";


const Form4=()=>{

    const [name,lname]=useState({
        fname:"",
        lname:"" 
    });

    const inputEvent=(event)=>{
        // event.preventDefault();
        console.log(event.target.value);
        console.log(event.target.name);
        // lname(event.target.value);

        const {name,value}=event.target;

        lname((preValue)=>{
            if(name==='fname'){
                return{
                    fname: value,
                    lname:preValue.lname,
                };
            
            }
            else if(name==='lname'){
                return{
                    lname:value,
                    fname:preValue.fname,
                }
            }
        })
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        alert('form submited');

    }

    return(
        <>
            
            <form onSubmit={onSubmit}>
                  <h1> hello {name.fname}{name.lname}</h1>
                  <input type="text" name='fname' value={name.fname} onChange={inputEvent} />
                  <input type="text" name='lname' value={name.lname} onChange={inputEvent} />
                  <button >submit   </button>
            </form>
        </>
    );
}
export default Form4;