import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import LogoIMG from "../../imagens/Logo.png";
import "./navbar.scss";

class NavbarClass extends Component {
  constructor(props) {
    super(props);
    this.lista_items = [
      {
        nome: "Home",
        link: "/",
      },
      {
        nome: "Projetos",
        link: "/Projetos",
      },
      {
        nome: "Redes Sociais",
        link: "/RedesSociais",
      },
      {
        nome: "Habilidades",
        link: "/Habilidades",
      },
    ];
  }
  componentDidMount() {}
  render() {
    return (
      <Navbar id="NavbarID" expand="lg">
        <Container>
          <Navbar.Brand id="logo" href="/">
            <img src={LogoIMG} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id="nav" className="mx-auto">
              {this.lista_items.map((item, i) => (
                <Nav.Link as={Link} to={item["link"]} key={i}>
                  {item["nome"]}
                </Nav.Link>
              ))}
            </Nav>
            <Nav id="ContatoNav" className="mx-auto">
              <Nav.Link as={Link} to="/RedesSociais" id="contato">
                Contato
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarClass;
