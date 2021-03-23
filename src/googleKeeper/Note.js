import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';

const Note=(props)=>{

    const deletList=()=>{
        props.deletItem(props.id);
    }
    return(
        <>
            <div>
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <Button onClick={deletList} >
                <DeleteOutlineIcon />
                </Button>
            </div>
        </>
    );
}
export default Note;