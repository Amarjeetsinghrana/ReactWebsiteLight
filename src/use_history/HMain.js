import { Route, Switch } from 'react-router-dom'
import React from 'react'
import HError from './HError'
import HHome from './HHome'
import HMenu from './HMenu'
import HService from './HService'
import HUser from './HUser'


const HMain=()=>{
    return(
        <>
                <HMenu />
                <Switch>
                    <Route exact path="/" component={HHome} />
                    <Route path="/service" component={HService} />
                    <Route path="/user/:fname/:lname" component={HUser} />
                    <Route component={HError} />
                </Switch>
        </>
    );
}
export default HMain;