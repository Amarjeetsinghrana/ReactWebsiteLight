import Rect from 'react'
import About from './About'
import Home from './Home'
import Navbar from './Navbar'
import Error from './Error'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Menu from './Menu'



const MainR=()=>{
    return(
        <>
        <Menu />
        <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/home" component={Home} />
            <Route path="/navbar" component={Navbar} />
            <Route  component={Error} />
        </Switch>
        </>
    );
}
export default MainR;