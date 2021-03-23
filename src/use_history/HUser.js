import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom';

const HUser=()=>{
    const{fname,lname}=useParams();
    const location=useLocation();
    const history=useHistory();
    return(
        <>
                <h1> Hi i am HUser page {fname} {lname}</h1>
                <p>this is location {location.pathname}{location.pathname===`/user/Amar/jeet` ? (<button onClick={()=>{alert("thank for visit")}}>click me</button>):null} </p>
                <p><button onClick={()=>{history.goBack()}}>click for history</button></p>
                <p><button onClick={()=>{history.push('/service')}}>click for history</button></p>
                
            
        </>
    );
}
export default HUser;