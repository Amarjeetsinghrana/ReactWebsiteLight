import react from 'react'
import { Link, NavLink } from 'react-router-dom'


const LinkWeb = () => {
    return (
        <>
            <h1>Hi i a tag</h1>
          
            <a href="/about"> About </a>
            <a href="/service"> service </a><br></br>
            <h1>Hi i am Link</h1>
            <Link to="/about"> About </Link>
            <Link to="/service"> service </Link><br></br>
            <h1>Hi i am NavLink</h1>
            <NavLink to="/about"> About </NavLink>
            <NavLink to="/service"> service </NavLink>

            
        </>
    );
}
export default LinkWeb;