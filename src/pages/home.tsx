import { UserRound } from "lucide-react";
import fundo from "../assets/inicio.jpg";
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
                <nav className="flex items-center gap-9">
                    <a href="#" className="text-[18px] text-gray-200 font-serif">Início</a>
                    <a href="#" className="text-[18px] text-gray-200 font-serif">Sobre</a>
                    <a href="#" className="text-[18px] text-gray-200 font-serif">Contato</a>
                    <a href="#" className="text-[18px] text-gray-200 font-serif">FAQ</a>

                    <button className="text-gray-200 hover:text-white transition">
                        <UserRound size={21} strokeWidth={1.5} />
                    </button>
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

                        {/* BOTÃO */}
                        <button
                            className="
                                mt-10
                                w-[350px] h-[60px]
                                border-2 border-white
                                rounded
                                font-serif
                                text-[20px]
                                text-gray-200
                                transition
                                hover:bg-white/15
                            "
                        >
                            Entrar
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
