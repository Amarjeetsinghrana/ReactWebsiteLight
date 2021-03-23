import React from 'react'
import { NavLink } from 'react-router-dom'

const HMenu=()=>{
    return(
        <>
                {/* <h1> Hi i am HMenu page</h1> */}
                <NavLink to="/service"> service </NavLink>
                <NavLink to="/user/Amar/jeet"> user </NavLink>
        </>
    );
}
export default HMenu;