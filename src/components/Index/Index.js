import React, { useContext } from 'react'
import {
  Link,
  withRouter
} from 'react-router-dom';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AppContext from "../Context";

import styles from './Index.module.css'



const Index = () => {


  const data = useContext( AppContext );

  return (
    <>
    <Header />
    <ol>
      {data.map( ({ fecha, id, type, numero, titulo }) => {

        if ( type === 'leccion' ) {

          return (
            <li key={ numero }>
              <Link to={`leccion/${numero}`}>
                <div className="shadow-md rounded-md bg-white max-w-sm justify-center items-center mx-auto">
                  <div className="w-full rounded-t-md" >
                    <div className="p-1 m-4 w-16 h-16 text-center bg-teal-400 rounded-full text-white float-right">
                      <span className="text-base tracking-wide  font-bold border-b border-white font-sans">{ numero }</span>
                      <span className="text-xs tracking-wide font-bold uppercase block font-sans">Lección</span>
                    </div>
                    <div className="py-4 px-4 bg-white rounded-b-md">
                      <div className="font-bold text-xl mb-2 text-gray-800">{ titulo}</div>
                      <span className="inline-block bg-teal-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{ fecha }</span>
                    </div>
                  </div>
                </div>

              </Link>
            </li>
          )

        } else if ( type === 'informe') {

          return (
            <li className={styles.leccion} key={ id }>

              <Link to={`informe/${ id }`}>

                <div className="shadow-md rounded-md bg-white max-w-sm justify-center items-center mx-auto">
                  <div className="w-full rounded-t-md" >
                    <div className="pt-6 m-4 w-16 h-16 text-center bg-blue-400 rounded-full text-white float-right">
                      <span className="text-xs tracking-wide font-bold uppercase block font-sans">Informe</span>
                    </div>
                    <div className="py-4 px-4 bg-white rounded-b-md">
                      <div className="font-bold text-xl mb-2 text-gray-800">{ titulo }</div>
                      <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{ fecha }</span>
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
    <Footer />
    </>
  )
}

export default withRouter(Index);
