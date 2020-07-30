import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'

import Parrafo from '../Parrafo/Parrafo';

import AppContext from "../Context";

const Informe = () => {
  
  const data = useContext( AppContext );
  const { id } = useParams();

  const target = data.filter( post => post.id === id );

  const { titulo, fecha, entrega, contenido, autor, puesto } = target[0];

  return (
    <>
      <h2>{ titulo.toUpperCase() }</h2>
      <h4>{ fecha && 'Para leer el sábado,'} {`${ fecha }`}</h4>
      <h4>{ entrega }</h4>
      <Parrafo nota={ contenido } />

      <blockquote className="">
        <p className="">{ autor }</p>
        <footer className="">{ puesto }</footer>
      </blockquote>
    </>
  )
}

export default Informe
