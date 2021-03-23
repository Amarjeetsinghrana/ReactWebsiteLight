import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState("");
    const [fulName, setFulName] = useState("");
    const [lname,setlname]=useState("");
    const [lnametwo,setlnametow]=useState("");
    const inputEvent = (event) => {
        // console.log(event.target.value);
        setName(event.target.value);


    }

    const inputEventtow=(event)=>{
        setlname(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        setFulName(name);
        setlnametow(lname);
       
    }
    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <h1>Hello{fulName}{lnametwo}</h1>
                        <input type="text" name="" onChange={inputEvent} value={name} />
                        <input type="text" name="" onChange={inputEventtow} value={lname} />

                    </div>
                    <button> click me </button>
                </form>
            </div>
        </>
    );
}
export default Form;