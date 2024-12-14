
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ImBook } from "react-icons/im";

const Navbar =()=>{
    return(
    <>
   <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <Link className="navbar-brand" to="/">
      <b><ImBook />       ToDo </b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-2">
        <li className="nav-item mx-1">
          <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-Link active" aria-current="page" to="/about">About Us</Link>
        </li>
        <li className="nav-item mx-1">
          <Link className="nav-Link active" aria-current="page" to="/about">ToDo</Link>
        </li>
        <li className="nav-item mx-2 my-1">
          <Link className="nav-Link active nav-bar-btn px-2" aria-current="page" to="#">Sign Up</Link>
        </li>
        <li className="nav-item mx-2 my-1">
          <Link className="nav-Link active nav-bar-btn px-2" aria-current="page" to="#">Sign In</Link>
        </li>
        <li className="nav-item mx-2 my-1">
          <Link className="nav-Link active nav-bar-btn px-2" aria-current="page" to="#">Log Out</Link>
        </li>
        <li className="nav-item mx-1">
        <Link className="nav-Link active" aria-current="page" to="#">
        <img  className=" img-fluid user-png" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="/"></img>

        </Link>

        </li>
        
        
    
      </ul>
    
    </div>
  </div>
</nav>
    </>)
}

export default Navbar;