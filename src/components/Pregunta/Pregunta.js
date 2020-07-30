import React from 'react'

import Texto from '../Texto/Texto'
import Nota from '../Parrafo/Parrafo'

const Pregunta = ({ preguntas }) => {
  return (
      <div>
        {
          preguntas.map(({ subtitulo, pregunta, textos, notas }, index) => {
            return (
              <div key={index}>
                { String( subtitulo ) !== 'null' ? <h3>{subtitulo}</h3> : null }
                <h4 className = "text-base font-bold mb-2 mt-4 text-justify">{`${ index + 1 }.- ${ pregunta } ` }</h4>
                <Texto texto={ textos}/>
                <Nota nota={ notas }/>
              </div>
            )
          })
        }
      </div>
  );
}

export default Pregunta