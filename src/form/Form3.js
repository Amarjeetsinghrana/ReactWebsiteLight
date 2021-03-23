import React, { useState } from 'react'

const Form3=()=>{

    const [name,setname]=useState("");
    const [lname,setLname]=useState("");
    const [fname,setfname]=useState("");
    const [lnametwo,setlnametwo]=useState("");


    const inputEvent=(event)=>{
        setname(event.target.value);
    }

    const inputEventtwo=(event)=>{
        setLname(event.target.value);

    }

    const onSubmit=(event)=>{
        event.preventDefault();
        setfname(name);
        setlnametwo(lname);

    }

    
    return(
        <>
            <form onSubmit={onSubmit}>
                <h1>Hello{fname}{lnametwo}</h1>
                <input type='text' name="" value={name} onChange={inputEvent} />
                <input type='text' name="" value={lname} onChange={inputEventtwo} />
                <button>click me</button>

            </form>
        </>
    );
}
export default Form3;