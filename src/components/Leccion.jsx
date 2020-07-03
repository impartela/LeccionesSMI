import React, {Component} from "react";
import { withRouter } from "react-router";

import Pregunta from './Pregunta'
import Nota from './Nota'

import { posts } from "../lecciones.json";

class Leccion extends Component {
    
    constructor(props) {
      super(props)
      
      this.numero = this.props.match.params.numero > 0 ? this.props.match.params.numero : 0
      this.state = { post: posts[this.numero - 1] }
    }
    
    render() {
      return (
        <div>
          <h2>{this.state.post.titulo}</h2>
          <h4>{this.state.post.subtitulo}</h4>
          <p><em>{this.state.post.fecha}</em></p>
          <Nota nota={this.state.post.introduccion} />
          <Pregunta preguntas={this.state.post.preguntas}/>
        </div>
      )
    }
    
}

export default withRouter(Leccion)