import React, { Component } from 'react'
import {
  Link,
  withRouter
} from 'react-router-dom'

import { posts } from "../../lecciones.json";

import styles from './Index.module.css'

class Home extends Component {
  render() {
      return (
        <ol>
          {posts.map((item, index) => {
            return (
              <li className={styles.leccion} key={index}>
                <Link to={`leccion/${index + 1}`}>
                  <strong>Leccion {index + 1}: </strong>
                  {item.titulo}
                  {"\n"}
                </Link>
              </li>
            )
          })}
        </ol>
      )
  }
}

export default withRouter(Home)