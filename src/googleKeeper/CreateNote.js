import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Note } from '@material-ui/icons';

const CreateNote=(props)=>{

    const [note,setNote]=useState({
        title:"",
        content:""
    });

    const inputEvent=(event)=>{
        const {name,value}=event.target;

        setNote((prevalue)=>{
            return{
                ...prevalue,
                [name]:value,
            }
        })
        // console.log(note);

        
    }
    const addEvent=()=>{
        props.passNote(note)
            setNote({
                title:"",
                content:"",
            });
    }
    return(
        <>
            <div>
                <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="title" autoComplete="off" />
                <textarea rows="" column="" name="content" value={note.content} onChange={inputEvent} placeholder="write a note"></textarea>
                <Button onClick={addEvent}>
                    <AddIcon />
                </Button>
            </div>

        </>
    );
}
export default CreateNote;