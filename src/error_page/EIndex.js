import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import EMain from './EMain'

const Eindex=()=>{
    return(
        <>
           
            <BrowserRouter>
            <EMain />
            </BrowserRouter>
        </>
    );
}
export default Eindex;