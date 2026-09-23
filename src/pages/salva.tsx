import { useEffect, useState } from "react";
import {
  Bookmark,
  House,
  Music2,
  Search,
  Settings,
  UserRound,
  Star,
  Plus,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

import lemonade from "../assets/lemonade.png";
import superFreakyGirl from "../assets/nick.png";

type Musica = {
  id: number;
  titulo: string;
  artista: string;
  capa: string;
  nota: number;
};

const MUSICAS: Musica[] = [
  {
    id: 1,
    titulo: "Lemonade",
    artista: "Internet Money",
    capa: lemonade,
    nota: 4,
  },
  {
    id: 2,
    titulo: "Super Freaky Girl",
    artista: "Nicki Minaj",
    capa: superFreakyGirl,
    nota: 3,
  },
];

const SIDE_LINKS = [
  {
    to: "/home",
    label: "Início",
    icon: House,
  },
  {
    to: "/musicas",
    label: "Explorar",
    icon: Music2,
  },
  {
    to: "/salva",
    label: "Salvos",
    icon: Bookmark,
  },
  {
    to: "/perfil",
    label: "Perfil",
    icon: UserRound,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-[2px]">
      {[1, 2, 3, 4, 5].map((numero) => (
        <Star
          key={numero}
          size={10}
          strokeWidth={1.5}
          className={
            numero <= rating
              ? "text-[#5ea3ee]"
              : "text-[#3d4655]"
          }
          fill={
            numero <= rating
              ? "currentColor"
              : "none"
          }
        />
      ))}
    </div>
  );
}

export default function Salvos() {
  const [query, setQuery] = useState("");

  // IDs das músicas salvas
  const [salvas, setSalvas] = useState<number[]>([]);

  // Modal para adicionar músicas
  const [modalAberto, setModalAberto] = useState(false);

  // Carrega os salvos
  // Se ainda não existir nada, começa com as duas músicas
  useEffect(() => {
    const dadosSalvos = localStorage.getItem(
      "mare-musicas-salvas"
    );

    if (dadosSalvos) {
      try {
        const ids = JSON.parse(dadosSalvos);

        if (Array.isArray(ids)) {
          setSalvas(ids);
        }
      } catch {
        setSalvas([1, 2]);
      }
    } else {
      setSalvas([1, 2]);
      localStorage.setItem(
        "mare-musicas-salvas",
        JSON.stringify([1, 2])
      );
    }
  }, []);

  // Salva no navegador sempre que mudar
  useEffect(() => {
    if (salvas.length >= 0) {
      localStorage.setItem(
        "mare-musicas-salvas",
        JSON.stringify(salvas)
      );
    }
  }, [salvas]);

  // Adicionar ou remover música
  function alternarSalvo(id: number) {
    setSalvas((atuais) => {
      if (atuais.includes(id)) {
        return atuais.filter(
          (musicaId) => musicaId !== id
        );
      }

      return [...atuais, id];
    });
  }

  // Músicas que estão salvas
  const musicasSalvas = MUSICAS.filter((musica) =>
    salvas.includes(musica.id)
  );

  // Busca somente entre as músicas salvas
  const musicasFiltradas = musicasSalvas.filter(
    (musica) => {
      const texto = `
        ${musica.titulo}
        ${musica.artista}
      `.toLowerCase();

      return texto.includes(
        query.toLowerCase()
      );
    }
  );

  return (
    <main className="min-h-screen border-4 border-[#252d38] bg-[#080d14] text-white">
      <div className="flex min-h-screen">

        {/* =====================================================
            SIDEBAR
        ====================================================== */}

        <aside className="sticky top-0 flex h-screen w-[215px] shrink-0 flex-col justify-between border-r border-[#252d38] bg-[#0d121c] py-4">

          <div>

            {/* LOGO */}
            <div className="flex items-center justify-center px-4">
              <img
                src={logo}
                alt="Maré"
                className="h-[60px] w-[150px] object-contain"
              />
            </div>

            {/* MENU */}
            <nav className="mt-8 flex flex-col">

              {SIDE_LINKS.map(
                ({ to, label, icon: Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `flex h-[42px] items-center gap-4 px-8 font-serif text-[15px] transition hover:text-blue-400 ${
                        isActive
                          ? "bg-[#1a2130] text-white"
                          : "text-gray-200"
                      }`
                    }
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                    />

                    {label}
                  </NavLink>
                )
              )}

            </nav>

            {/* POST */}
            <div className="mt-10 px-8">
              <Link
                to="/post"
                className="block h-[42px] w-full rounded-lg bg-[#5ea3ee] text-center font-serif text-[16px] leading-[42px] text-white transition hover:bg-[#7ab4f2]"
              >
                Post
              </Link>
            </div>

          </div>

          {/* CONFIGURAÇÕES */}
          <Link
            to="/configuracoes"
            className="flex items-center gap-4 px-8 font-serif text-[15px] text-gray-200 transition hover:text-blue-400"
          >
            <Settings
              size={20}
              strokeWidth={1.5}
            />

            Configurações
          </Link>

        </aside>

        {/* =====================================================
            CONTEÚDO
        ====================================================== */}

        <div className="min-w-0 flex-1 px-10 py-6">

          {/* CONTAINER CENTRALIZADO */}
          <div className="mx-auto w-full max-w-[1050px]">

            {/* BUSCA */}
            <label className="flex h-[40px] w-full max-w-[600px] items-center gap-4 rounded-md bg-[#111726] px-5 text-gray-300 focus-within:ring-1 focus-within:ring-blue-400">

              <Search
                size={18}
                strokeWidth={1.5}
              />

              <input
                type="search"
                value={query}
                onChange={(e) =>
                  setQuery(e.target.value)
                }
                placeholder="Buscar..."
                aria-label="Buscar músicas salvas"
                className="w-full bg-transparent font-serif text-[15px] text-gray-200 outline-none placeholder:text-gray-400"
              />

            </label>

            {/* TÍTULO */}
            <div className="mt-8 flex items-end justify-between">

              <div>
                <h1 className="font-serif text-[26px] text-gray-100">
                  Músicas salvas
                </h1>

                <p className="mt-2 font-serif text-[10px] text-[#5ea3ee]">
                  {salvas.length}{" "}
                  {salvas.length === 1
                    ? "música"
                    : "músicas"}
                </p>
              </div>

              {/* BOTÃO ADICIONAR */}
              <button
                type="button"
                onClick={() =>
                  setModalAberto(true)
                }
                className="flex items-center gap-2 rounded-md bg-[#5ea3ee] px-4 py-2 font-serif text-[12px] text-white transition hover:bg-[#7ab4f2]"
              >
                <Plus
                  size={15}
                  strokeWidth={1.8}
                />

                Adicionar música
              </button>

            </div>

            {/* =================================================
                LISTA DE MÚSICAS
            ================================================== */}

            <div className="mt-5 flex w-full flex-col gap-3">

              {musicasFiltradas.map(
                (musica) => (

                  <article
                    key={musica.id}
                    className="flex min-h-[100px] w-full items-center rounded-xl border border-[#252d38] bg-[#0d121c] px-5 py-3 transition hover:border-[#33445d]"
                  >

                    {/* CAPA */}
                    <img
                      src={musica.capa}
                      alt={`Capa de ${musica.titulo}`}
                      className="h-[76px] w-[76px] shrink-0 rounded-md object-cover"
                    />

                    {/* INFORMAÇÕES */}
                    <div className="ml-5 flex min-w-0 flex-1 flex-col justify-center">

                      <h2 className="break-words font-serif text-[14px] leading-tight text-gray-200">
                        {musica.titulo}
                      </h2>

                      <p className="mt-1 break-words font-serif text-[10px] text-gray-500">
                        {musica.artista}
                      </p>

                      <div className="mt-4">
                        <Stars
                          rating={musica.nota}
                        />
                      </div>

                    </div>

                    {/* BOTÃO SALVAR / REMOVER */}
                    <button
                      type="button"
                      onClick={() =>
                        alternarSalvo(
                          musica.id
                        )
                      }
                      aria-label={`Remover ${musica.titulo} dos salvos`}
                      title="Remover dos salvos"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#5ea3ee] transition hover:bg-[#1a2130] hover:text-red-400"
                    >
                      <Bookmark
                        size={18}
                        strokeWidth={1.5}
                        fill="currentColor"
                      />
                    </button>

                  </article>

                )
              )}

            </div>

            {/* =================================================
                NENHUM RESULTADO
            ================================================== */}

            {musicasFiltradas.length === 0 && (
              <div className="mt-10 rounded-xl border border-[#252d38] bg-[#0d121c] py-12 text-center">

                <Bookmark
                  size={30}
                  strokeWidth={1.4}
                  className="mx-auto mb-3 text-gray-600"
                />

                <p className="font-serif text-[14px] text-gray-400">
                  {query
                    ? "Nenhuma música encontrada."
                    : "Você não tem músicas salvas."}
                </p>

                {!query && (
                  <button
                    type="button"
                    onClick={() =>
                      setModalAberto(true)
                    }
                    className="mt-4 font-serif text-[12px] text-[#5ea3ee] hover:underline"
                  >
                    Adicionar uma música
                  </button>
                )}

              </div>
            )}

          </div>

        </div>
      </div>

      {/* =====================================================
          MODAL — ADICIONAR MÚSICA
      ====================================================== */}

      {modalAberto && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() =>
            setModalAberto(false)
          }
        >

          <div
            className="w-full max-w-[500px] overflow-hidden rounded-xl border border-[#252d38] bg-[#0d121c]"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* CABEÇALHO */}
            <div className="flex items-center justify-between border-b border-[#252d38] px-5 py-4">

              <div>
                <h2 className="font-serif text-[17px] text-gray-100">
                  Adicionar música
                </h2>

                <p className="mt-1 font-serif text-[10px] text-gray-500">
                  Escolha uma música para salvar.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setModalAberto(false)
                }
                className="text-gray-400 transition hover:text-white"
                aria-label="Fechar"
              >
                <X
                  size={19}
                  strokeWidth={1.5}
                />
              </button>

            </div>

            {/* LISTA */}
            <div className="max-h-[400px] overflow-y-auto p-4">

              <div className="flex flex-col gap-3">

                {MUSICAS.map((musica) => {

                  const estaSalva =
                    salvas.includes(
                      musica.id
                    );

                  return (
                    <div
                      key={musica.id}
                      className="flex items-center rounded-lg border border-[#252d38] bg-[#10151f] p-3"
                    >

                      {/* CAPA */}
                      <img
                        src={musica.capa}
                        alt={musica.titulo}
                        className="h-[58px] w-[58px] shrink-0 rounded-md object-cover"
                      />

                      {/* INFO */}
                      <div className="ml-4 min-w-0 flex-1">

                        <p className="break-words font-serif text-[13px] text-gray-200">
                          {musica.titulo}
                        </p>

                        <p className="mt-1 font-serif text-[9px] text-gray-500">
                          {musica.artista}
                        </p>

                      </div>

                      {/* BOTÃO */}
                      <button
                        type="button"
                        onClick={() =>
                          alternarSalvo(
                            musica.id
                          )
                        }
                        className={`flex items-center gap-2 rounded-md px-3 py-2 font-serif text-[10px] transition ${
                          estaSalva
                            ? "bg-[#1a2130] text-[#5ea3ee]"
                            : "bg-[#5ea3ee] text-white hover:bg-[#7ab4f2]"
                        }`}
                      >

                        <Bookmark
                          size={14}
                          strokeWidth={1.5}
                          fill={
                            estaSalva
                              ? "currentColor"
                              : "none"
                          }
                        />

                        {estaSalva
                          ? "Salva"
                          : "Salvar"}

                      </button>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}