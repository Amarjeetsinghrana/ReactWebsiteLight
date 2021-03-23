import React, { useState } from 'react'

const Form6=()=>{

    const [name,setName]=useState({
        firstName:"",
        lastName:"",
    });

    const inputEvent=(event)=>{
        console.log(event.target.value);
        console.log(event.target.name);

        const {value,name}=event.target;

        setName((preValue)=>{
            if(name==='firstName'){
                return{
                    firstName:value,
                    lastName:preValue.lastName,
                }
            }

            else if(name==='lastName'){
                return{
                    lastName:value,
                    firstName:preValue.firstName,
                }
            }

        })
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        alert("form submitted")
    }
    return(
        <>
            <form onSubmit={onSubmit}>
                <h1>HELLO{name.firstName}{name.lastName}</h1>

                <input type="text" name="firstName" value={name.firstName} onChange={inputEvent} />
                <input type="text" name="lastName" value={name.lastName} onChange={inputEvent} />
                <button>submit</button>
            </form>
        </>
    );
}
export default Form6