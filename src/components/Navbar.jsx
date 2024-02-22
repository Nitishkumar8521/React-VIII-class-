import { Link } from "react-router-dom"; 

function Navbar(){
    return(
        <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contect">Contect</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Users">Users</Link>
        </div>
    )
}

export default Navbar;