import React, { Component } from "react";
import "./redessociaispage.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  instagram_Svg,
  github_svg,
} from "../../componentes/svg_redessociais/svg_redesociais";

class RedesSociaisPage extends Component {
  render() {
    return (
      <Container id="RedesSociaisPage">
        <h2>Redes Sociais</h2>
        <Row id="RedeSocialRow">
          <a
            className="RedeSocial"
            href="https://www.instagram.com/andersondevbr/"
            target="_blank"
            rel="noreferrer"
          >
            {instagram_Svg}
            <p>Instagram</p>
          </a>
          <a
            className="RedeSocial"
            href="https://github.com/AndersonDev2"
            target="_blank"
            rel="noreferrer"
          >
            {github_svg}
            <p>Github</p>
          </a>
        </Row>
      </Container>
    );
  }
}

export default RedesSociaisPage;
