import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Cadastro from "./pages/cadastro";
import Cadastro2 from "./pages/cadastro2";
import Filtrar from "./pages/filtrar";
import Ini from "./pages/inicio";
import Perfil from "./pages/perfil";
import Acessibilidade from "./pages/acessibilidade"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home />} />
         <Route path="/home"element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro2" element={<Cadastro2 />} />
        <Route path="/filtrar" element={<Filtrar />} />
        <Route path="/inicio" element={<Ini />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/acessibilidade" element={<Acessibilidade />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;