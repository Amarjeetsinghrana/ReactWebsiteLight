import { Route, Switch } from 'react-router-dom'
import React from 'react'
import SHome from './SHome'
import SMenu from './SMenu'
import About from './About'
import Service from './Service'
import Error from './Error'


const SMain=()=>{
    return(
        <>
            
            <SMenu />
            <Switch>
                    <Route exact path="/" component={SHome} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/service" component={Service} />
                    <Route  component={Error} />
            </Switch>
        </>
    );
}
export default SMain;