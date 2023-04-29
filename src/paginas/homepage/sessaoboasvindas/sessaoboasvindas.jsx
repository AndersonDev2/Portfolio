import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RedesSociais from "./redessociais/redessociais";
import "./sessaoboasvindas.scss";
import LogoIMG from "../../../imagens/Logo.png";

class SessaoBoasVindas extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container id="SessaoBoasVindas" fluid>
        <Row>
          <Col>
            <p id="TextoBoasVindas">
              Bem-vindo ao meu portfólio online! Aqui você encontrará exemplos
              do meu trabalho mais recente e poderá conhecer mais sobre mim e
              minhas habilidades.
            </p>
          </Col>
          <Col lg>
            <img id="Imagem" src={LogoIMG} alt="Imagem" />
            <RedesSociais />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SessaoBoasVindas;
