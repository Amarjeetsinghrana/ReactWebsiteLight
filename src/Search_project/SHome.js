import React, { useState } from 'react'
import SResult from './SResult';

const SHome=()=>{
    const [img,setImg]=useState();

    const inputEvent=(event)=>{
        const data=event.target.value;
        console.log(data)
        setImg(data);

    }
    return(
        <>
            <h1>Hello i am SHome {img} </h1>
          <input type="text" placeholder="search here" value={img} onChange={inputEvent} />
          {img === ""? null :<SResult name={img}/>}
        </>
    );
}
export default SHome;