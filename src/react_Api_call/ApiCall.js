import React, { useState,useEffect } from 'react'
import axios  from 'axios';

const Apicall=()=>{
    const [num,setNum]=useState();
    const [name,setName]=useState();
    const [moves,setMoves]=useState();

    useEffect(()=>{
        // alert(`Your selected ${num} ?`)
        async function getdata(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            // console.log(res.data.name);
            // setName(res.data.name)
            setName(res.data.name)
            setMoves(res.data.moves.length)

        }
        getdata();
    })
    return(
        
        <>
        <h1> You press value <span style={{color:"red"}}>{num}</span> correct !!</h1>
        <h1> Your name is <span style={{color:"red"}}>{name}</span> correct !!</h1>
        <h1> You moves is <span style={{color:"red"}}>{moves}</span> correct !!</h1>
            <select value={num} onChange={(event)=>{
                setNum(event.target.value);
            }}>
                <option value='1'>1</option>
                <option value='25'>25</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                {/* <option value='5'>5</option> */}
            </select>
        </>
    );
}
export default Apicall;