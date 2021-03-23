import React from 'react'
import { NavLink } from 'react-router-dom'

const UMenu=()=>{
    return(
        <>
                {/* <h1> Hi i am UMenu page</h1> */}
                <NavLink to="/about"> About </NavLink>
                <NavLink to="/service"> service </NavLink>
                <NavLink to="/user/amr/jeet"> user </NavLink>
        </>
    );
}
export default UMenu;