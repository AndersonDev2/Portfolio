import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import { instagram_Svg } from "../../../../componentes/svg_redessociais/svg_redesociais";
import "./redessociais.scss";

class RedesSociais extends Component {
  render() {
    return (
      <div id="RedesSociaisDiv">
        <a
          className="aRedeSocial"
          href="https://www.instagram.com/andersondevbr/"
          target="_blank"
          rel="noreferrer"
          id="instagram"
        >
          {instagram_Svg}
        </a>
      </div>
    );
  }
}

export default RedesSociais;
