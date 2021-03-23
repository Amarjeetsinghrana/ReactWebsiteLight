import React from 'react'
import { NavLink } from 'react-router-dom'


const Menu=()=>{
    return(
        <>
            <NavLink to="/user/amr/jeet"> user </NavLink>
            <NavLink to="/about"> about </NavLink>
            <NavLink to="/service"> service </NavLink>
        </>
    );
}
export default Menu;