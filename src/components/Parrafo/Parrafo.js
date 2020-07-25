import React from 'react'

const Nota = ({ nota }) => {
    return (
      nota.map((item, index) => {
        return <p key={index}>{ item }</p>
      })
    )
}

export default Nota