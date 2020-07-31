import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import Parrafo from '../Parrafo/Parrafo';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import AppContext from "../Context";

const Informe = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  
  const data = useContext( AppContext );
  const { id } = useParams();

  const target = data.filter( post => post.id === id );

  const { titulo, fecha, entrega, contenido, autor, puesto } = target[0];

  return (
    <>
      <Header />
      <div className = "mx-5 my-4">
      <h2 className = "text-2xl text-center text-green-700">{ titulo.toUpperCase() }</h2>
      <h4 className = " text-center mb-4 text-teal-400">{ fecha && 'Para leer el sábado,'} {`${ fecha }`}</h4>
      <h4 className = "text-center mb-4 text-blue-400">{ entrega }</h4>
      <Parrafo nota={ contenido } />

      <blockquote className="">
        <p className="text-center text-teal-400">{ autor }</p>
        <footer className="text-center text-blue-400">{ puesto }</footer>
      </blockquote>
      </div>
      <Footer />
    </>
  )
}

export default Informe
