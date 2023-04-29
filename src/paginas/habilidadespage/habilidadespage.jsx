import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./habilidadespage.scss";
import Habilidades from "../../componentes/habilidades/habilidades";

class HabilidadePage extends Component {
  render() {
    return (
      <Container id="HabilidadesPage">
        <h2>Habilidades</h2>
        <Habilidades />
      </Container>
    );
  }
}

export default HabilidadePage;
