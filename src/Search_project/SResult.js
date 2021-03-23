import React from 'react'

const SResult=(props)=>{
    const img=`https://source.unsplash.com/random ${props.name}`
    return(
        <>
            <h1>Hello i am SResult</h1>
            <img src={img} alt="search" height="300" width="300"/>
            
        </>
    );
}
export default SResult;