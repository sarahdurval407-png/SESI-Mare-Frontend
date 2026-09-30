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
import Musica from "./pages/musica";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import Configuracoes from "./pages/configuracoes"

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-right" />

      <Routes>
        {/* Página não cadastrado */}
        <Route path="/" element={<Hero />} />

        {/* Cadastro */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Route>

        {/* Saiba mais */}
        <Route path="/contato" element={<Contato />} />

        {/* Páginas */}
        <Route element={<ProtectedRoute/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/filtrar" element={<Filtrar />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/acessibilidade" element={<Acessibilidade />} />
          <Route path="/artistas" element={<Artistas />} />
          <Route path="/salvos" element={<Salvos />} />
          <Route path="/criarpost" element={<Criarpost />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/configuracoes" element={<Configuracoes/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
