import React from 'react'

const Texto = ({ texto, }) => {    
    return (
      <div>
        {
          texto.map(({ cita, contenido}, index) => {
            return <p key={ cita }>
              <strong>{ cita }</strong> { contenido }
            </p>
          })
        }
      </div>
    )
}

export default Texto