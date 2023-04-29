import React, { Component } from "react";
import SessaoBoasVindas from "./sessaoboasvindas/sessaoboasvindas";
import Habilidades from "../../componentes/habilidades/habilidades";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./homepage.scss";

class Homepage extends Component {
  render() {
    return (
      <Container>
        <SessaoBoasVindas />
        <Habilidades />
      </Container>
    );
  }
}

export default Homepage;
