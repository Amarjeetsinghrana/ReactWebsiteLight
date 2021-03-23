import React from 'react'
import MenuAbout from './MenuAbout'
import MenuHome from './MenuHome'
import MenuService from './MenuService'
import Error from './Error'
import { Switch, Route } from 'react-router-dom';

import LinkWeb from './LinkWeb'

const MenuMain = () => {
    return (
        <>
        <LinkWeb />
            <Switch>
                <Route exact path="/" component={()=><MenuHome name=" MenuHome "/>} />
                <Route exact path="/about" component={MenuAbout} />
                <Route exact path="/service" render={()=><MenuService name=" MenuService"/>} />
                <Route path="/" component={Error} />
            </Switch>
        </>
    );
}
export default MenuMain;