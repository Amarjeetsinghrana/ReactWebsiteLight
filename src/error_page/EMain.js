import { Redirect, Route, Switch } from 'react-router-dom'
import React from 'react'
import EAbout from './EAbout'
import EError from './EError'
import EHome from './EHome'
import EMenu from './EMenu'
import EService from './EService'

const EMain=()=>{
    return(
        <>
            <EMenu />
            <Switch>
                <Route exact path="/" component={EHome} />
                <Route path="/service" component={EService} />
                <Route path="/about" component={EAbout} />
                {/* <Route path="/" component={EError} /> */}
                <Redirect to="/" />
            </Switch>
        </>
    );
}
export default EMain;