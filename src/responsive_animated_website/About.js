
import React from 'react'
import { NavLink } from 'react-router-dom';
import img from './image/learn.jpg'
import Common from './Common';



const About=()=>{
    return(
        <>
           <Common name="Welcome to About page"
               imgsrc={img}
               visit="/contact"
               btnname="contact now"
           />
        </>
    );
}
export default About;