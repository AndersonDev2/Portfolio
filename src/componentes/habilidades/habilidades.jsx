import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { webDev_svg } from "./svg_habilidades.jsx";
import "./habilidades.scss";

class Habilidades extends Component {
  render() {
    return (
      <Container id="Habilidades">
        <Row id="habilidade">
          <h3>Desenvolvedor Web</h3>
          <Col>
            <ul>
              <li>HTML | CSS</li>
              <li>JAVASCRIPT</li>
              <li>REACT</li>
              <li>DJANGO</li>
            </ul>
          </Col>
          <Col>{webDev_svg}</Col>
        </Row>
      </Container>
    );
  }
}

export default Habilidades;
