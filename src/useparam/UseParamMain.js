
import React from 'react'
import { Route , Switch } from 'react-router-dom'
import UseParamAbout from './UseParamAbout'
import UseParamHome from './UseParamHome'
import UseParamServices from './UseParamIndex'
import Menu from './Menu'
import UseParamUser from './UseParamUser'

const UseParamMain=()=>{
    return(
        <>
        <Menu />
           <Switch>
               <Route exact path="/" component={UseParamHome} />
               <Route exact path="/about" component={UseParamAbout} />
               <Route exact path="/service" component={UseParamServices} />
               <Route exact path="/user/:fname/:lname" component={UseParamUser} />
               <Route component={Error} />
           </Switch>
        </>
    );
}
export default UseParamMain;