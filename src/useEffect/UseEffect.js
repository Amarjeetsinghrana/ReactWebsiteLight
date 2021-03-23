import React, { useEffect, useState } from 'react'

const UseEffect=()=>{
    const [num,setNum]=useState(0);
    const [nums,setNums]=useState(0);

    useEffect(()=>{
        alert('clicked')
        console.log('clicked')
    },[num])

    return(
        <>
            <h1>Hello </h1>
            <button onClick={()=>{setNum(num+1)}}> click {num}</button>
            <button onClick={()=>{setNums(nums+1)}}> click {nums}</button>
        </>
    );
}
export default UseEffect;