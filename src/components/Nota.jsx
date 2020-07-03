import React from 'react'

function Nota(props) {
    return (
      props.nota.map((item, index) => {
        return <p key={index}>{item}</p>
      })
    )
}

export default Nota