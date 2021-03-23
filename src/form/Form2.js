import React, { useState } from 'react'

const Form2=()=>{

    const [name,setName]=useState("");
    const [nametwo,setNametow]=useState("");
    const [lname,setLname]=useState("");
    const [lnametwo,setLnametwo]=useState("");


    const InputEvent=(event)=>{
        
        setName(event.target.value)
    }

    const InputEventtwo=(event)=>{
        setLname(event.target.value);
    }

    const onsubmit=(event)=>{
        event.preventDefault();
        setLnametwo(lname)
        setNametow(name)
    }
    return(
        <>
            <div>
                <form onSubmit={onsubmit}>
                    <h1>Hello{nametwo}{lnametwo}</h1>
                    <input type='text' name="" value={name} onChange={InputEvent} />
                    <input type='text' name="" value={lname} onChange={InputEventtwo} />
                    <button >click me </button>
                </form>
            </div>
        </>
    );
}
export default Form2;