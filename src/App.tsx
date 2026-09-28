import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Hero from "./pages/hero";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import Filtrar from "./pages/filtrar";
import Perfil from "./pages/perfil";
import Acessibilidade from "./pages/acessibilidade";
import Artistas from "./pages/artistas";
import Explorar from "./pages/explorar";
import Salvos from "./pages/salvos";
import Criarpost from "./pages/criarpost";
import Contato from "./pages/contato";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>

      <Toaster position="bottom-right" />

      <Routes>
        {/* Página não cadastrado */}
        <Route path="/" element={<Hero />} />


        {/* Cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contato" element={<Contato />} />

        {/* Páginas */}
        <Route path="/home" element={<Home />} />
        <Route path="/Explorar" element={<Explorar />} />
        <Route path="/filtrar" element={<Filtrar />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/acessibilidade" element={<Acessibilidade />} />
        <Route path="/artistas" element={<Artistas />} />
        <Route path="/salvos" element={<Salvos />} />
        <Route path="/criarpost" element={<Criarpost />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;  