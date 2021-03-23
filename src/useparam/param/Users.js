import React from 'react'
import { useParams } from 'react-router-dom';

const Users=()=>{
    const{fname,lname}=useParams();
    return(
        <>
                <h1>Hello I am from Users {fname} {lname}</h1>
        </>
    );
}
export default Users;