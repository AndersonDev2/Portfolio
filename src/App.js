import { Routes, Route, Navigate } from "react-router-dom";
import NavbarClass from "./componentes/navbar/navbar";
import Homepage from "./paginas/homepage/homepage";
import RedesSociaisPage from "./paginas/redessociaispage/redessociaispage";
import HabilidadePage from "./paginas/habilidadespage/habilidadespage";
import ProjetoPage from "./paginas/projetospage/projetospage";

function App() {
  return (
    <div>
      <NavbarClass />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/RedesSociais" element={<RedesSociaisPage />} />
        <Route path="/Habilidades" element={<HabilidadePage />} />
        <Route path="/Projetos" element={<ProjetoPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
}

export default App;
