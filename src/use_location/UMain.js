import { Route, Switch } from 'react-router-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import UAbout from './UAbout'
import UError from './UError'
import UHome from './UHome'
import UService from './UService'
import UUser from './UUser'
import UMenu from './UMenu'

const UMain = () => {
    return (
        <>
            {/* <h1> Hi i am UMain page</h1> */}
            {/* <BrowserRouter>
                <UHome />
                <UAbout />
                <UService />
                <UUser />
                <UError />
            </BrowserRouter> */}
            <UMenu />
            <Switch>
                <Route exact path="/" component={UHome} />
                <Route path="/about" component={UAbout} />
                <Route path="/service" component={UService} />
                <Route path="/user/:fname/:lname" component={UUser} />
                <Route component={UError} />
            </Switch>


        </>
    );
}
export default UMain;