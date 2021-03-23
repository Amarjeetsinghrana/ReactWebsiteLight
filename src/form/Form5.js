import React, { useState } from 'react'

const Form5=()=>{

    const [name,setName]=useState({
        fname:'',
        phone:'',
        email:'',
        address:'',

    });

    const inputEvent=(event)=>{

        console.log(event.target.value);
        console.log(event.target.name);

        const {name,value}=event.target;

        setName((preValue)=>{
            if(name==='fname'){
                return{
                    fname:value,
                    phone:preValue.phone,
                    email:preValue.email,
                    address:preValue.address,
                }
            }
            else if(name==='phone'){
                return{
                    phone:value,
                    fname:preValue.fname,
                    email:preValue.email,
                    address:preValue.address,
                }
            }
            else if(name==='email'){
                return{
                    email:value,
                    phone:preValue.phone,
                    fname:preValue.fname,
                    address:preValue.address,
                }
            }
            else if(name==='address'){
               return {
                   address:value,
                   email:preValue.email,
                   phone:preValue.phone,
                   fname:preValue.fname,

                }
            }
        })

    }
const onSubmit=(event)=>{
    event.preventDefault();
    alert("submited");
}


    return(
        <>
            <form onSubmit={onSubmit}>
                <h1>Hello</h1>
                <input type="text" name='fname' value={name.fname} onChange={inputEvent} placeholder="plz enter your name" />
                <input type="text" name="phone" value={name.phone} onChange={inputEvent} placeholder="plz enter your phone number"/>
                <input type="text" name="email" value={name.email} onChange={inputEvent} placeholder="plz enter your email"/>
                <input type="text" name="address" value={name.address} onChange={inputEvent} placeholder="plz enter your Address"/>
                <button>submit</button>
            </form>
        </>
    );
}
export default Form5;