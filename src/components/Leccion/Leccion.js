import React, { useContext } from "react";
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";

import Pregunta from '../Pregunta/Pregunta'
import Parrafo from '../Parrafo/Parrafo'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import AppContext from "../Context";

const Leccion = () => {

  // useEffect(() => {
  //   if (this.props.location !== prevProps.location) {
  //     window.scrollTo(0, 0)
  //   }
  // },[]);
  
  const data = useContext( AppContext )

  let { numero } = useParams();

  numero = numero > 0 ? numero : 0
  const target = data.filter( e => e.numero === numero )[0];

  const { titulo, subtitulo, fecha, introduccion, preguntas, adicional } = target;
  
  return (
    <>
      <Header />
      <div className = "mx-5 my-4">
      <h2 className = "text-2xl text-center text-green-700">{ titulo }</h2>
      <h4 className = "text-center mb-4 text-teal-400" >{ subtitulo }</h4>
      <p className = "mb-4 text-blue-300"><em>{ fecha }</em></p>
      <Parrafo nota={ introduccion } />
      <Pregunta preguntas={ preguntas }/>
      <h4 className = "text-center mt-4 mb-1 text-blue-300 underline" >{ adicional.contenido.length > 0 && 'Estudio adicional'} { adicional.titulo && `- ${ adicional.titulo }`}</h4>
      { adicional.contenido.length > 0 && <Parrafo nota={ adicional.contenido}/>}
      </div>
      <Footer />      
    </>
  )
}


export default withRouter(Leccion)