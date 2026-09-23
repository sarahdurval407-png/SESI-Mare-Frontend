import { useState } from "react";
import { Search, Check, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

// Importações dos artistas
import theWeeknd from "../assets/the weekend.png";
import drake from "../assets/drake.png";
import travisScott from "../assets/travisscott.png";
import ludmilla from "../assets/ludmilla.png";
import jorgeMateus from "../assets/jorgemateus.png";
import calvinHarris from "../assets/calvin.png";
import morada from "../assets/morada.png";
import arianaGrande from "../assets/ariana.png";
import laurynHill from "../assets/lauryn.png";
import cardiB from "../assets/cardi b.png";

// Interface dos artistas
interface Artista {
  id: number;
  nome: string;
  foto: string;
}

// Lista de artistas
const artistas: Artista[] = [
  { id: 1, nome: "The Weeknd", foto: theWeeknd },
  { id: 2, nome: "Drake", foto: drake },
  { id: 3, nome: "Travis Scott", foto: travisScott },
  { id: 4, nome: "Ludmilla", foto: ludmilla },
  { id: 5, nome: "Jorge & Mateus", foto: jorgeMateus },
  { id: 6, nome: "Calvin Harris", foto: calvinHarris },
  { id: 7, nome: "Morada", foto: morada },
  { id: 8, nome: "Ariana Grande", foto: arianaGrande },
  { id: 9, nome: "Lauryn Hill", foto: laurynHill },
  { id: 10, nome: "Cardi B", foto: cardiB },
  

  
];

// Passo atual do fluxo de onboarding
const PASSO_ATUAL = 2;
const TOTAL_PASSOS = 2;

function SeusArtistas() {
  const [busca, setBusca] = useState("");
  const [selecionados, setSelecionados] = useState<number[]>([1, 4, 7]);

  // Filtra os artistas de acordo com a pesquisa
  const artistasFiltrados = artistas.filter((artista) =>
    artista.nome.toLowerCase().includes(busca.toLowerCase().trim())
  );

  // Selecionar ou desmarcar artista
  function alternarSelecao(id: number) {
    setSelecionados((atual) =>
      atual.includes(id)
        ? atual.filter((itemId) => itemId !== id)
        : [...atual, id]
    );
  }

  // Calcula o progresso
  const progresso = (PASSO_ATUAL / TOTAL_PASSOS) * 100;

  return (
    <main className="min-h-screen bg-[#080d14] text-white flex flex-col items-center px-6 py-16">
      {/* LOGO */}
      <img
        src={logo}
        alt="Maré"
        className="w-[220px] object-contain mb-8"
      />

      {/* TÍTULO */}
      <h1 className="font-serif text-[32px] font-bold">
        Seus artistas
      </h1>

      <p className="text-gray-400 text-[15px] mt-2 mb-8 text-center">
        Escolha seus artistas favoritos para personalizar sua experiência.
      </p>

      {/* BUSCA */}
      <div className="relative w-full max-w-[400px] mb-14">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar artista..."
          className="
            w-full h-[46px]
            bg-[#0f1622] border border-[#252d38]
            rounded-lg pl-11 pr-4
            text-[15px] text-gray-200
            placeholder:text-gray-500
            outline-none
            focus:border-blue-400
            transition
          "
        />
      </div>

      {/* GRID DE ARTISTAS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-[900px] w-full">
        {artistasFiltrados.map((artista) => {
          const selecionado = selecionados.includes(artista.id);

          return (
            <button
              key={artista.id}
              type="button"
              onClick={() => alternarSelecao(artista.id)}
              className={`
                relative flex flex-col items-center gap-3
                p-5 rounded-lg border transition cursor-pointer
                ${
                  selecionado
                    ? "border-blue-400 bg-blue-400/5"
                    : "border-[#252d38] hover:border-gray-500"
                }
              `}
            >
              <img
                src={artista.foto}
                alt={artista.nome}
                className="w-[70px] h-[70px] rounded-full object-cover"
              />

              <span className="flex items-center gap-1.5 text-[14px] font-serif text-center">
                {artista.nome}
                {selecionado && (
                  <span className="w-[16px] h-[16px] rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                    <Check size={10} strokeWidth={3} className="text-[#080d14]" />
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* RODAPÉ: PASSO + AVANÇAR */}
      <div className="w-full max-w-[900px] flex items-center justify-between mt-16">
        <div>
          <p className="text-gray-400 text-[13px] mb-1">
            Passo {PASSO_ATUAL} de {TOTAL_PASSOS}
          </p>
          <div className="w-[140px] h-[2px] bg-[#252d38] rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-400 transition-all"
              style={{ width: `${progresso}%` }}
            />
          </div>
        </div>

        <button
          type="button"
          disabled={selecionados.length === 0}
          className="
            w-[48px] h-[48px]
            rounded-full
            bg-blue-400
            flex items-center justify-center
            transition cursor-pointer
            hover:bg-blue-500
            disabled:opacity-40 disabled:cursor-not-allowed
          "
        >
          <ArrowRight size={20} className="text-[#080d14]" />
        </button>
      </div>
    </main>
  );
}

export default SeusArtistas;