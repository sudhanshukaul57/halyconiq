import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
 
const Navbar = (props) => {
  let session = props.session
  console.log("Session value is ", session)
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light nav-bg p-3"> 
        <link className="navbar-brand" to="/"></link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsupportedContent">
        <span class="logo">HalyconIq</span>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Aboutus">About Us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Services">Company</Link>
            </li>
            
            <li className="nav-item">
                <Link className="nav-link" to="/Contactus">Contact Us</Link>
            </li>

            {!session &&  <li className="nav-item">
                <Link className="nav-link" to="/LoginRegister">Login|Register</Link>
            </li>}
            
            {session && <li className="nav-item">
                <Link className="nav-link" to="/upload">Upload Data</Link>
            </li>}

            {session && <li className="nav-item">
                <Link className="nav-link" to="/randomComparison">Random Comparison</Link>
            </li>}

            {session && <li className="nav-item">
                <Link className="nav-link">Visualize Data</Link>
            </li>}

            {session && <li className="nav-item">
                <Link className="nav-link" to="/LogOut">Log Out</Link>
            </li>}
        </ul>
    </div>
      </nav>


    </div>
  )
}

export default Navbar;