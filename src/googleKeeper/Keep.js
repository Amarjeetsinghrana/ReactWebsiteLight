import React, { useState } from 'react'
import CreateNote from './CreateNote'
import Footer from './Footer'
import Header from './Header'
import Note from './Note'
// import './keep.css'

const Keep=()=>{
    const [item,addItem]=useState([]);

    const addNote=(note)=>{
        // alert("hello pass")
        addItem((prevdate)=>{
            return[...prevdate,note]
        })
    }

    const onDelet=(id)=>{
        addItem((oldvalue)=>{
            oldvalue.filter((currdata,index)=>{
                return index !==id;
            })
        })
    }
    return(
        <>
            <Header />
            <CreateNote passNote={addNote}/>
            {/* <Note /> */}
            {item.map((val,index)=>{
                return(
                    <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deletItem={onDelet}
                    />
                )
            })}
            <Footer />
        </>
    );
}
export default Keep;