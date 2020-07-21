import React from 'react'

import Texto from '../Texto/Texto'
import Nota from '../Nota/Nota'

function Pregunta(props) {
  return (
      <div>
        {
          props.preguntas.map((value, index) => {
            return (
              <div key={index}>
                { value.subtitulo != null ? <h3>{value.subtitulo}</h3> : null }
                <h4>{ value.pregunta }</h4>
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