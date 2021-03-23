import react from 'react'
import { Link, NavLink } from 'react-router-dom'

const Menu=()=>{
    return(
        <>
            <h1>Hello Menu</h1>
            <NavLink className="active_class" to="/">About</NavLink><br></br>
            <NavLink className="active_class" to="/home">Home</NavLink><br></br>
            <a href="/">About</a><br></br>
            <a href="/home">Home</a>
        </>
    );
}
export default Menu;