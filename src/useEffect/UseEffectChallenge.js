import React, { useEffect, useState } from 'react'

const UseEffectChallenge=()=>{
    const [num,setNum]=useState(0)

    useEffect(()=>{
        // document.title=`You clicked me ${num} times`
    })
    return(
        <>
            <button onClick={()=>{
                setNum(num+1)
            }}>click me {num}</button>
        </>
    );
}
export default UseEffectChallenge;