import React, { useState } from 'react'



const Contact = () => {
    const[data,setData]=useState({
        name:"",
        email:"",
        phone:"",
        description:""
    })

    const inputEvent=(event)=>{
        const {name, value}=event.target;
        setData((preValue)=>{
                return{
                    ...preValue,
                    [name]:value
                }
        })
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`Name: ${data.name} Mob no. ${data.phone} Email: ${data.email} Description: ${data.description}`)
       
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Name</label>
                                    <input name="name" value={data.name} onChange={inputEvent} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Phone No.</label>
                                    <input name="phone" value={data.phone} onChange={inputEvent} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Phone No." />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Email address</label>
                                    <input name="email" value={data.email} onChange={inputEvent} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea name="description" value={data.description} onChange={inputEvent}   className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="col-12">
                                <button type="submit" className="btn btn-outline-primary">Confirm identity</button>
                                </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Contact;