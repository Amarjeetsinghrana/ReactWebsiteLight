import react from 'react'
import Navbar from '../react_Router/Router/Navbar'

const Menu=()=>{
    return(
        <>
            <Navbar to="/about">About</Navbar>
            <Navbar to="/service">Service</Navbar>
            <Navbar to="/user">Service</Navbar>
        </>
    );
}
export default Menu;

//in this program have some error