import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from './NavBar.module.css'

class NavBar extends Component {
  render() {
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
    );
  }
}

export default NavBar;