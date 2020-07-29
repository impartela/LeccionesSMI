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
      <div className = "mx-4 my-4">
      <h2 className = "text-2xl text-center">{ titulo }</h2>
      <h4 className = "text-center mb-4" >{ subtitulo }</h4>
      <p className = "mb-4"><em>{ fecha }</em></p>
      <Parrafo nota={ introduccion } />
      <Pregunta preguntas={ preguntas }/>
      </div>
    </>
  )
}

export default withRouter(Leccion)