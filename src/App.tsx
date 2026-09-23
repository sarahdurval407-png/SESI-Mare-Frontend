import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Hero from "./pages/hero";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import Filtrar from "./pages/filtrar";
import Ini from "./pages/musicas";
import Perfil from "./pages/perfil";
import Acessibilidade from "./pages/acessibilidade";
import Compartilhe from "./pages/compartilhe";
import Compartilhe1 from "./pages/compartilhe1";
import Compartilhe2 from "./pages/compartilhe2";
import Artistas from "./pages/artistas";
import Musicas from "./pages/musicas";
import Salva from "./pages/salva";
import Criarpost from "./pages/criarpost";
import { Toaster } from "react-hot-toast";

function App() {
   return (
 <BrowserRouter>

<Toaster position="bottom-right" />

 <Routes>
 {/* Página inicial */}
<Route path="/home" element={<Home />} />
<Route path="/hero" element={<Hero />} />

 {/* Cadastro */}
 <Route path="/cadastro" element={<Cadastro />} />
<Route path="/login" element={<Login />} />

{/* Páginas */}
 <Route path="/filtrar" element={<Filtrar />} />
 <Route path="/inicio" element={<Ini />} />
 <Route path="/perfil" element={<Perfil />} />
 <Route path="/acessibilidade" element={<Acessibilidade />} />
 <Route path="/artistas" element={<Artistas />} />
 <Route path="/musicas" element={<Musicas />} />
 <Route path="/salva" element={<Salva />} />
 <Route path="/criarpost" element={<Criarpost />} />

{/* Compartilhe */}
 <Route path="/compartilhe" element={<Compartilhe />} />
 <Route path="/compartilhe1" element={<Compartilhe1 />} />
 <Route path="/compartilhe2" element={<Compartilhe2 />} />
 </Routes>
 </BrowserRouter>
 );
}

export default App;  