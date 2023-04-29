import React, { Component } from "react";
import "./projeto.scss";

class Projeto extends Component {
  render() {
    return (
      <div id="Projeto">
        <a href={this.props.href} target="_blank" rel="noreferrer">
          <img src={this.props.img} alt="Imagem" />
          <p>{this.props.descricao}</p>
        </a>
      </div>
    );
  }
}

export default Projeto;
