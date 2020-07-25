import React from "react";
import { withRouter } from "react-router";

import Pregunta from '../Pregunta/Pregunta'
import Parrafo from '../Parrafo/Parrafo'

import { posts } from "../../lecciones.json";

const Leccion = ({ match }) => {

  const { params } = match;

  const numero = params.numero > 0 ? params.numero : 0
  const state = { post: posts[numero - 1] }
  
  const { titulo, subtitulo, fecha, introduccion, preguntas } = state.post;

  return (
    <>
      <h2>{ titulo }</h2>
      <h4>{ subtitulo }</h4>
      <p><em>{ fecha }</em></p>
      <Parrafo nota={ introduccion } />
      <Pregunta preguntas={ preguntas }/>
    </>
  )
}

export default withRouter(Leccion)