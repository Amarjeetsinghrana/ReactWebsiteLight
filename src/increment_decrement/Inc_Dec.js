import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Inc_Dec=()=>{

    const [num,setNum]=useState(0);

    const Increment=()=>{
        setNum(num+1);   
    }

    const Decrement=()=>{
        if (num > 0){
            setNum (num -1)
        }
        else{
            setNum(0);
            alert("Num is 0 Now");
        }
    }
    return(
        <>
        <h1>{num}</h1>

            <button onClick={Increment}><AddIcon /></button>
            <button onClick={Decrement}><RemoveIcon /></button>
        </>
    );

}
export default Inc_Dec;