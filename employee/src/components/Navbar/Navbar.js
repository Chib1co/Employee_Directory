import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function NavBar(){
return(
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Employee Directory
        </Link>
      </li>
    </ul>
)
}

export default NavBar;