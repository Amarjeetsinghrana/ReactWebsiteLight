import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const UUser=()=>{
    const{fname , lname}=useParams();
    const location=useLocation();
    return(
        <>
                <h1> Hi i am UUser page {fname} {lname} </h1>
                <p>My current location is {location.pathname} </p>
                {location.pathname===`/user/amr/jeet` ? (<button onClick={()=>{alert("yes you got it")}}>click me</button>):null }
        </>
    );
}
export default UUser;