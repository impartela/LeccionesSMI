import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from './NavBar.module.css'

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/index">Indice</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;