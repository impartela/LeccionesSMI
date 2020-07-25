import React from 'react'

import { posts } from "../../lecciones.json";
import Parrafo from '../Parrafo/Parrafo';

import './styles.module.css'

const Informe = ({ match }) => {

  const { id } = match.params;
  const target = posts.filter( post => post.id === id );

  const { titulo, fecha_lectura, entrega, contenido, autor, puesto } = target[0];

  return (
    <>
      <h2>{ titulo.toUpperCase() }</h2>
      <h4>{ fecha_lectura }</h4>
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
