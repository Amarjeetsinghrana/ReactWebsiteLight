import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Routercontact from './RouterContact';
import RouterMain from './RouterMain';

const RouterBrowser=()=>{
    return(
        <>
            <BrowserRouter>
            <RouterMain />
            </BrowserRouter>

        </>
    );
}
export default RouterBrowser;