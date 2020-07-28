import React from 'react'
import {
  Link,
  withRouter
} from 'react-router-dom'

import { posts } from "../../lecciones.json";

import styles from './Index.module.css'

const Index = () => {
  return (

    <ol className = "">
      {posts.map((item, index) => {
        
        if ( item.type === 'leccion' ) {
          
          return (

            <li className="block md:flex md:space-x-2 px-2 lg:p-0" key={ index }>
              
              <Link className = "mb-2 w-full md:w-1/2 relative rounded inline-block h-16" to={`leccion/${index + 1}`}>

              <div class="absolute left-0 bottom-0 w-full h-full z-10">
          <div class=" p-1 m-4 w-16 h-16 text-center bg-blue-400 rounded-full text-white float-right fd-cl group-hover:opacity-25">
            <span class="text-base tracking-wide  font-bold border-b border-white font-sans">{index + 1}</span>
             <span class="text-xs tracking-wide font-bold uppercase block font-sans">Lección</span>
         </div> 
        </div>
        <img src="https://tailwindcss.com/img/card-top.jpg" class = "absolute left-0 top-0 w-full h-full rounded z-0 object-cover" alt= ""/>
        <div class="p-4 absolute bottom-0 left-0 z-20">
          <span class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">{item.fecha}</span>
          <h2 class="text-3xl font-semibold text-gray-100 leading-tight">
          {item.titulo}
          </h2>
        </div>
              
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

