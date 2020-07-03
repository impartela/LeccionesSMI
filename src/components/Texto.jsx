import React from 'react'

function Texto(props) {    
    return (
      <div>
        {
          props.texto.map((value, index) => {
            return <p key={index}>
              <strong>{value.cita}</strong> {value.contenido}
            </p>
          })
        }
      </div>
    )
}

export default Texto