import React from "react";
import { Link } from "react-router-dom";

import './NavBar.module.css'

const NavBar = () => {
  return (
    <div id="list">
      <nav>
        
        <ul>
          <li >
            <Link to="/">Home</Link>
          </li>

          <li >
            <Link to="/index">Indice</Link>
          </li>
        </ul>

      </nav>
    </div>
  )
}

export default NavBar;
