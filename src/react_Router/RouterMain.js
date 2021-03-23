import { Switch , Route } from 'react-router-dom';
import React from 'react'
import Routercontact from './RouterContact';
import RouterIndex from './RouterIndex';
import Error from './Error';

const RouterMain=()=>{

    const Name=()=>{
        return(
            <h1> may name is Amar</h1>
        );
    }
    return(
        <>
            <Switch>
                <Route exact path="/" component={RouterIndex} />
                <Route exact path="/contact" component={Routercontact} />
                <Route exact path="/contact/name" component={Name} />

                <Route component={Error} />
            </Switch>

        </>
    );
}
export default RouterMain;