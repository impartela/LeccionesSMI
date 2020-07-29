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
            <li>
              <Link to={`leccion/${index + 1}`}>


  <div className="shadow-md rounded-md bg-white max-w-sm justify-center items-center mx-auto">
    <div  className="w-full rounded-t-md" >
      <div className="p-1 m-4 w-16 h-16 text-center bg-blue-400 rounded-full text-white float-right">
        <span className="text-base tracking-wide  font-bold border-b border-white font-sans">{index + 1}</span>
        <span className="text-xs tracking-wide font-bold uppercase block font-sans">Lección</span>
      </div>
      <div className="py-4 px-4 bg-white rounded-b-md">
        <div className="font-bold text-xl mb-2">{item.titulo}</div>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{item.fecha}</span>
      </div>
    </div> 
  </div>

              </Link>
            </li>
          )

        } else if ( item.type === 'informe' ) {

          return (
            <li className={ styles.leccion } key={ index }>
              
              <Link to={`informe/${ item.id }`}>

              <div className="shadow-md rounded-md bg-white max-w-sm justify-center items-center mx-auto">
    <div  className="w-full rounded-t-md" >
      <div className="p-1 m-4 w-16 h-16 text-center bg-blue-400 rounded-full text-white float-right">
        <span className="text-base tracking-wide  font-bold border-b border-white font-sans">{index + 1}</span>
        <span className="text-xs tracking-wide font-bold uppercase block font-sans">Informe</span>
      </div>
      <div className="py-4 px-4 bg-white rounded-b-md">
        <div className="font-bold text-xl mb-2">{item.titulo}</div>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{item.fecha}</span>
      </div>
    </div> 
  </div>


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

