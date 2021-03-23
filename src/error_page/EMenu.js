import React from 'react'
import { NavLink } from 'react-router-dom'

const EMenu=()=>{
    return(
        <>
            <NavLink to="/service"> service </NavLink>
            <NavLink to="/about"> about </NavLink>
        </>
    );
}
export default EMenu;