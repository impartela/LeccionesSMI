import React, { Component } from 'react'
import {
  withRouter
} from 'react-router-dom'

class Home extends Component {
  render() {
      return (
        <>
          <h1>Lecciones de Escuela Sabática</h1>
          <p>Segundo Semestre 2020</p>
          <p><strong>Las Hijas de Sara y Los Eventos de los Últitimos Días</strong></p>
        </>

      )
  }
}

export default withRouter(Home)
