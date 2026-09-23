import { ChevronRight } from "lucide-react";
import fundoApresentacao from "../assets/compartilhe.png";
import logo from "../assets/mare.png";

function Apresentacao() {
  return (
    <main 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: "#080d14",
        backgroundImage: `url(${fundoApresentacao})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Logo no canto superior esquerdo */}
      <div className="absolute top-6 left-8 z-10">
        <img
          src={logo}
          alt="Maré"
          className="w-[300px] h-[95px] object-contain"
        />
      </div>

      {/* Texto central */}
      <div className="relative z-10 text-center px-8">
        <p className="text-white/90 font-serif text-[22px] md:text-[50px] tracking-wide">
          Descubra novas músicas com a comunidade.
        </p>
      </div>

      {/* Indicadores de página */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-gray-600"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-gray-600"></span>
      </div>

      {/* Botão de próxima página */}
      <button 
        className="absolute bottom-8 right-8 w-[44px] h-[44px] rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition z-10"
        type="button"
      >
        <ChevronRight size={22} strokeWidth={2} />
      </button>
    </main>
  );
}

export default Apresentacao;