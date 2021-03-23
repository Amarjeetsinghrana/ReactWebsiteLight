import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import  "../material_Ui_Icons/Material.css"
import Card from '@material-ui/core/Card';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Tooltip from '@material-ui/core/Tooltip';
const Material_Ui=()=>{
    return(
        <>
            <h1>Hello Ui_ icons</h1>
            <Tooltip title="Add">
            <button className="mater"><RemoveIcon /></button>
            </Tooltip>
            <Tooltip title="Add">
            <Button><AddIcon /></Button>
            </Tooltip>
            <Tooltip title="Delete">
            <Button><DeleteOutlineIcon /> </Button>
            </Tooltip>
            <div>
                <h1> hello <Card /></h1>
                <FavoriteIcon /><ShareIcon />   
            </div>
            <div>
                
            </div>
        </>
    );
}
export default Material_Ui;

// first install 
// npm i @material-ui/icons
// and 2nd time
// npm install @material-ui/core
