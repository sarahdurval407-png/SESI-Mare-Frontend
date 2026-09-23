import { UserRound } from "lucide-react";
import { Link } from "react-router-dom"; // Importação do React Router
import fundo from "../assets/Inicio3.png";
import logo from "../assets/logo.png";

function Home() {
  return (
    <main className="min-h-screen bg-[#080d14] text-white border-4 border-[#252d38]">
      {/* NAVBAR */}
      <header className="h-[100px] flex items-center justify-between px-10">
        {/* LOGO */}
        <div className="flex items-center justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-[160px] h-[80px] object-contain"
          />
        </div>
        {/* MENU */}
        <nav className="flex items-center gap-16">
          <a href="#" className="text-[18px] text-gray-200 font-serif transition hover:text-blue-400">Comunidade</a>
          <a href="#" className="text-[18px] text-gray-200 font-serif transition hover:text-blue-400">Início</a>
          <a href="#" className="text-[18px] text-gray-200 font-serif transition hover:text-blue-400">Contato</a>
          <a href="#" className="text-[18px] text-gray-200 font-serif transition hover:text-blue-400">FAQ</a>
          <Link to="/cadastro" className="text-gray-200 hover:text-blue-400 transition">
            <UserRound size={21} strokeWidth={1.5} />
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-100px)] overflow-hidden">
        {/* FUNDO */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${fundo})` }}
        />
        {/* CONTEÚDO */}
        <div className="relative z-10 flex min-h-[calc(100vh-100px)] items-center">
          {/* TEXTO */}
          <div className="ml-[7%] -mt-10">
            <h1 className="font-serif text-[60px] leading-[1.35] font-normal">
              Descubra, avalie e <br />
              compartilhe músicas <br />
              que combinam com <br />
              <span className="text-[65px] font-bold">VOCÊ.</span>
            </h1>

            {/* BOTÃO ENTRAR / CADASTRAR */}
            <Link
              to="/login"
              className="
                inline-block
                mt-10
                w-[350px] h-[60px]
                border-2 border-white
                rounded
                font-serif
                text-[20px]
                text-gray-200
                transition
                hover:bg-white/15 hover:text-blue-400 hover:border-blue-400
                text-center leading-[60px]
              "
            >
              Entrar
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#3a73c4] px-10 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* LINKS DO RODAPÉ */}
          <nav className="flex items-center gap-8">
            <a href="#" className="text-[15px] text-gray-300 font-serif transition hover:text-blue-400">Início</a>
            <a href="#" className="text-[15px] text-gray-300 font-serif transition hover:text-blue-400">Sobre</a>
            <a href="#" className="text-[15px] text-gray-300 font-serif transition hover:text-blue-400">Contato</a>
            <a href="#" className="text-[15px] text-gray-300 font-serif transition hover:text-blue-400">FAQ</a>
          </nav>
          {/* COPYRIGHT */}
          <p className="text-[14px] text-gray-500 font-serif">
            © {new Date().getFullYear()} Maré. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default Home;