import React, { useState } from 'react'

const ShortForm=()=>{


    const [name,setName]=useState({
        name:"",
        lname:"",
        email:"",
        biodata:"",
    });

    const inputEvent=(event)=>{

        const {name,value}=event.target;
        console.log(name,value);

        setName((preValue)=>{
            return{
                ...preValue,
                [name]:value
            }
        })

    }

    const onSubmit=(event)=>{
        event.preventDefault();
        alert("form submitted")
    }
    return(
        <>
            <h1 >Hello{name.name}</h1>
            <p>{name.lname}</p>
            <p>{name.email}</p>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" value={name.name} onChange={inputEvent} />
                <input type="text" name="lname" value={name.lname} onChange={inputEvent} />
                <input type="text" name="email" value={name.email} onChange={inputEvent} />
                <input type="text" name="biodata" value={name.biodata} onChange={inputEvent} />
                <button>submit</button>
            </form>
        </>
    );
}
export default ShortForm;