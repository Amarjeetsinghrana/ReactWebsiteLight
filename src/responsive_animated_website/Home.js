import React from 'react'
import { NavLink } from 'react-router-dom';
import img from './animated.jpg'
import Common from './Common';



const Home=()=>{
    return(
        <>
            <Common name="Grow your busines"
               imgsrc={img}
               visit="/service"
               btnname="get started"/>
        </>
    );
}
export default Home;