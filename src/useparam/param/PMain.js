import { Route, Switch } from 'react-router-dom'
import React from 'react'
import PAbout from './PAbout'
import PError from './PError'
import PHome from './PHome'
import PService from './PService'
import Users from './Users'
import Menu from './Menu'

const PMain=()=>{
    return(
        <>
                {/* <h1>Hello I am from PMain</h1>
                <PHome />
                <PAbout />
                <PService />
                <PError />
                <Users /> */}
                <Menu />
               <Switch>
                   <Route exact path="/" component={PHome} />
                   <Route path="/about" component={PAbout} />
                   <Route path="/service" component={PService} />
                   <Route path ="/user/:fname/:lname" component={Users} />
                   <Route component={PError} />
               </Switch>
        </>
    );
}
export default PMain;