import React from 'react'
import {
  Link,
  withRouter
} from 'react-router-dom'

import { posts } from "../../lecciones.json";

import styles from './Index.module.css'

const Index = () => {
  return (
    <ol>
      {posts.map((item, index) => {
        
        if ( item.type === 'leccion' ) {
          
          return (
            <li className={ styles.leccion } key={ index }>
              
              <Link to={`leccion/${index + 1}`}>
                <strong>Leccion {index + 1}: </strong>
                {item.titulo}
                <br />
              </Link>
          
            </li>
          )

        } else if ( item.type === 'informe' ) {

          return (
            <li className={ styles.leccion } key={ index }>
              
              <Link to={`informe/${ item.id }`}>
                <strong>Informe: </strong>
                {item.titulo}
                <br />
              </Link>
          
            </li>
          )
        }
         return <></>

      })}
    </ol>
  )
}

export default withRouter(Index)

// return (
//   <li className={ styles.leccion } key={ index }>
    
//     <Link to={`leccion/${index + 1}`}>
//       <strong>Leccion {index + 1}: </strong>
//       {item.titulo}
//       <br />
//     </Link>

//   </li>
// )

