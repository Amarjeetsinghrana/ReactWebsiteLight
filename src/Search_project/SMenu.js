import React from 'react'
import { NavLink } from 'react-router-dom'

const SMenu=()=>{
    return(
        <>
            <h1>Hello i am SMenu</h1>
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/service"> service </NavLink>
        </>
    );
}
export default SMenu;