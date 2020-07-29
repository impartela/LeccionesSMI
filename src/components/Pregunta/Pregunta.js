import React from 'react'

import Texto from '../Texto/Texto'
import Nota from '../Parrafo/Parrafo'

const Pregunta = ({ preguntas }) => {
  return (
      <div>
        {
          preguntas.map((value, index) => {
            return (
              <div key={index}>
                { value.subtitulo != null ? <h3>{value.subtitulo}</h3> : null }
                <h4 className = "text-base font-bold mb-2 mt-4 text-justify">{ value.pregunta }</h4>
                <Texto texto={value.textos}/>
                <Nota nota={value.notas}/>
              </div>
            )
          })
        }
      </div>
  );
}

export default Pregunta