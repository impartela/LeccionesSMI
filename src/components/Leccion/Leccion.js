import React, { useContext } from "react";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";

import Pregunta from '../Pregunta/Pregunta'
import Parrafo from '../Parrafo/Parrafo'

import AppContext from "../Context";

const Leccion = () => {
  
  const data = useContext( AppContext )

  let { numero } = useParams();

  numero = numero > 0 ? numero : 0
  const target = data.filter( e => e.numero === numero )[0];

  const { titulo, subtitulo, fecha, introduccion, preguntas, adicional } = target;
  
  return (
    <>
      <div className = "mx-4 my-4">
      <h2 className = "text-2xl text-center">{ titulo }</h2>
      <h4 className = "text-center mb-4" >{ subtitulo }</h4>
      <p className = "mb-4"><em>{ fecha }</em></p>
      <Parrafo nota={ introduccion } />
      <Pregunta preguntas={ preguntas }/>
      <h4 className = "text-center mb-4" >{ adicional.contenido.length > 0 && 'Estudio adicional'} { adicional.titulo && `- ${ adicional.titulo }`}</h4>
      { adicional.contenido.length > 0 && <Parrafo nota={ adicional.contenido}/>}
      </div>
    </>
  )
}

export default withRouter(Leccion)