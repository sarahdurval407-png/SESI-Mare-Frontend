import { useState } from "react";
import logo from "../assets/logo.png";
import {
  Mic2,
  Headphones,
  Piano,
  Guitar,
  Music2,
  CircleSlash2,
  Heart,
  CircleDot,
  Target,
  Star,
  ArrowRight,
  Check,
  Search,
  type LucideIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Genre {
  id: string;
  label: string;
  icon: LucideIcon;
}

const GENRES: Genre[] = [
  { id: "pop", label: "Pop", icon: Mic2 },
  { id: "rap", label: "Rap", icon: Headphones },
  { id: "hip-hop", label: "Hip Hop", icon: Piano },
  { id: "rock", label: "Rock", icon: Guitar },
  { id: "sertanejo", label: "Sertanejo", icon: Music2 },
  { id: "pagode", label: "Pagode", icon: CircleSlash2 },
  { id: "gospel", label: "Gospel", icon: Heart },
  { id: "jazz", label: "Jazz", icon: CircleDot },
  { id: "mpb", label: "MPB", icon: Target },
  { id: "k-pop", label: "K-pop", icon: Star },
];

const PASSO_ATUAL = 1;
const TOTAL_PASSOS = 2;

export default function VibeSelectionPage() {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");
  const [selecionados, setSelecionados] = useState<Set<string>>(
    new Set(["pop", "hip-hop", "pagode", "mpb"])
  );

  const generosFiltrados = GENRES.filter((genero) =>
    genero.label.toLowerCase().includes(busca.toLowerCase())
  );

  function alternarGenero(id: string) {
    setSelecionados((atual) => {
      const proximo = new Set(atual);
      if (proximo.has(id)) {
        proximo.delete(id);
      } else {
        proximo.add(id);
      }
      return proximo;
    });
  }

  function handleAvancar() {
    if (selecionados.size === 0) return;
    
    // Redireciona para a rota /artistas passando os gêneros selecionados no state
    navigate("/artistas", {
      state: { generosSelecionados: Array.from(selecionados) },
    });
  }

  const progresso = (PASSO_ATUAL / TOTAL_PASSOS) * 100;

  return (
    <main className="min-h-screen bg-[#080A10] text-white flex flex-col items-center px-6 py-16">
      {/* LOGO */}
      <img
        src={logo}
        alt="Maré"
        className="w-[220px] object-contain mb-8"
      />

      {/* TÍTULO */}
      <h1 className="font-serif text-[32px] font-bold">Qual a sua vibe?</h1>
      <p className="text-gray-400 text-[15px] mt-2 mb-8 text-center max-w-md">
        Escolha seus estilos favoritos para personalizar seu feed de descobertas.
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
          placeholder="Buscar..."
          className="
            w-full h-[46px]
            bg-[#0f1622] border border-[#252d38]
            rounded-lg
            pl-11 pr-4
            text-[15px] text-gray-200
            placeholder:text-gray-500
            outline-none
            focus:border-blue-400
            transition
          "
        />
      </div>

      {/* GRID DE GÊNEROS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-[900px] w-full">
        {generosFiltrados.map(({ id, label, icon: Icon }) => {
          const selecionado = selecionados.has(id);

          return (
            <button
              key={id}
              type="button"
              onClick={() => alternarGenero(id)}
              aria-pressed={selecionado}
              className={`
                relative flex flex-col items-center gap-3
                p-5 rounded-lg border
                transition cursor-pointer
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                ${selecionado
                  ? "border-blue-400 bg-blue-400/5"
                  : "border-[#252d38] hover:border-gray-500"}
              `}
            >
              <span
                className={`
                  w-[70px] h-[70px] rounded-full
                  flex items-center justify-center
                  ${selecionado
                    ? "bg-blue-400/10 text-blue-400"
                    : "bg-[#151c28] text-gray-400"}
                `}
              >
                <Icon size={26} />
              </span>

              <span className="flex items-center gap-1.5 text-[14px] font-serif">
                {label}
                {selecionado && (
                  <span className="w-[16px] h-[16px] rounded-full bg-blue-400 flex items-center justify-center">
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
              className="h-full bg-blue-400 transition-all duration-300"
              style={{ width: `${progresso}%` }}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleAvancar}
          disabled={selecionados.size === 0}
          aria-label="Avançar para a página de artistas"
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