import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./projetopage.scss";
import Projeto from "./projeto/projeto";
import LandingPageIMG from "./projetosImagens/LandingPage.png";
import SistemaDeloginIMG from "./projetosImagens/SistemaDeLogin.png";
import GerenciadorDeTarefas from "./projetosImagens/GerenciadorDeTarefas.png";

class ProjetoPage extends Component {
  render() {
    return (
      <Container id="ProjetoPageContainer">
        <h2>Projetos</h2>
        <Container id="ProjetosHabilidade">
          <h3>Desenvolvedor Web</h3>
          <Row id="RowProjetos">
            <Projeto
              img={LandingPageIMG}
              descricao={"Landing Page responsiva com react"}
              href={"https://github.com/AndersonDev2/Landing-Page"}
            />
            <Projeto
              img={SistemaDeloginIMG}
              descricao={"Sistema de Login com react e django"}
              href={"https://github.com/AndersonDev2/Sistema-de-login"}
            />
            <Projeto
              img={GerenciadorDeTarefas}
              descricao={"Lista de tarefas com react e django"}
              href={"https://github.com/AndersonDev2/Lista-de-tarefas"}
            />
          </Row>
        </Container>
      </Container>
    );
  }
}

export default ProjetoPage;
