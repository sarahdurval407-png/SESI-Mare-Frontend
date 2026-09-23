
import { useState, type ReactNode } from "react";
import {
  Home,
  Music2,
  Bookmark,
  UserRound,
  Settings,
  Search,
  TrendingUp,
  Star,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

/* ---------- Tipos ---------- */

type Album = {
  id: number;
  title: string;
  artist: string;
  rating: number;
  reviews: string;
  bg: string;
  cover: string;
};

type Destaque = {
  id: number;
  title: string;
  subtitle: string;
  tag: string;
  bg: string;
};

/* ---------- Dados ---------- */

const destaques: Destaque[] = [
  {
    id: 1,
    title: "Sinfonia do Amanhã",
    subtitle:
      "Um álbum instrumental que mistura sintetizadores e orquestra.",
    tag: "EXCLUSIVO",
    bg: "from-indigo-950 via-slate-900 to-blue-900",
  },
  {
    id: 2,
    title: "Ecos do Deserto",
    subtitle: "Percussão, violão e paisagens sonoras do sertão.",
    tag: "EXCLUSIVO",
    bg: "from-zinc-700 to-amber-900",
  },
];

const maisBemAvaliadas: Album[] = [
  {
    id: 1,
    title: "Billie Jean",
    artist: "Michael Jackson",
    rating: 5,
    reviews: "1,2 mil avaliações",
    bg: "bg-gradient-to-br from-neutral-100 to-neutral-400",
    cover: "MJ",
  },
  {
    id: 2,
    title: "Photograph",
    artist: "Ed Sheeran",
    rating: 5,
    reviews: "980 avaliações",
    bg: "bg-green-600",
    cover: "✕",
  },
  {
    id: 3,
    title: "10 Ligações",
    artist: "Rock Lee de Barro",
    rating: 4,
    reviews: "640 avaliações",
    bg: "bg-gradient-to-br from-red-950 to-neutral-900",
    cover: "",
  },
  {
    id: 4,
    title: "Ciara",
    artist: "Ciara",
    rating: 5,
    reviews: "410 avaliações",
    bg: "bg-gradient-to-br from-amber-100 to-stone-300",
    cover: "",
  },
];

const talvezGoste: Album[] = [
  {
    id: 5,
    title: "Starboy",
    artist: "The Weeknd",
    rating: 5,
    reviews: "2 mil avaliações",
    bg: "bg-gradient-to-b from-red-600 to-blue-950",
    cover: "STARBOY",
  },
  {
    id: 6,
    title: "Dangerous Woman",
    artist: "Ariana Grande",
    rating: 4,
    reviews: "1,1 mil avaliações",
    bg: "bg-gradient-to-br from-neutral-200 to-neutral-500",
    cover: "",
  },
  {
    id: 7,
    title: "Amigo do Rei",
    artist: "Seu Jorge",
    rating: 5,
    reviews: "530 avaliações",
    bg: "bg-gradient-to-br from-red-600 to-yellow-500",
    cover: "SEU JORGE",
  },
  {
    id: 8,
    title: "Say So",
    artist: "Doja Cat",
    rating: 4,
    reviews: "870 avaliações",
    bg: "bg-gradient-to-br from-fuchsia-500 to-pink-300",
    cover: "",
  },
];

/* ---------- Menu ---------- */

const menu = [
  {
    label: "Início",
    icon: Home,
    rota: "/inicio",
  },
  {
    label: "Explorar",
    icon: Music2,
    rota: "/filtrar",
  },
  {
    label: "Salvos",
    icon: Bookmark,
    rota: "/salvos",
  },
  {
    label: "Perfil",
    icon: UserRound,
    rota: "/perfil",
  },
];

/* ---------- Estrelas ---------- */

function Estrelas({ nota }: { nota: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${nota} de 5 estrelas`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={11}
          strokeWidth={1.8}
          className={
            i < nota
              ? "fill-yellow-400 text-yellow-400"
              : "text-slate-600"
          }
        />
      ))}
    </div>
  );
}

/* ---------- Card de álbum ---------- */

function CardAlbum({ album }: { album: Album }) {
  return (
    <article className="w-[180px] shrink-0 rounded-xl border border-white/10 bg-[#101722] p-3 transition-all duration-200 hover:-translate-y-1 hover:border-[#1689e8]/60 hover:bg-[#121c2b]">
      <div
        className={`flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg ${album.bg} text-xl font-black text-white/90`}
      >
        {album.cover}
      </div>

      <div className="mt-3">
        <h3 className="truncate text-sm font-semibold text-white">
          {album.title}
        </h3>

        <p className="mt-0.5 truncate text-xs text-slate-400">
          {album.artist}
        </p>

        <div className="mt-2 flex items-center justify-between">
          <Estrelas nota={album.rating} />

          <span className="text-[9px] text-slate-500">
            {album.reviews}
          </span>
        </div>
      </div>
    </article>
  );
}

/* ---------- Seção ---------- */

function Secao({
  icone,
  titulo,
  children,
}: {
  icone: ReactNode;
  titulo: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-[#1689e8]">{icone}</span>

        <h2 className="text-sm font-semibold text-white">
          {titulo}
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {children}
      </div>
    </section>
  );
}

/* ---------- Página ---------- */

export default function Mare() {
  const [ativo, setAtivo] = useState("Explorar");
  const [busca, setBusca] = useState("");

  const filtrar = (lista: Album[]) => {
    const termo = busca.toLowerCase().trim();

    if (!termo) {
      return lista;
    }

    return lista.filter((album) =>
      `${album.title} ${album.artist}`
        .toLowerCase()
        .includes(termo)
    );
  };

  return (
    <div className="flex min-h-screen bg-[#080d14] font-sans text-white">
      {/* ================= SIDEBAR ================= */}

      <aside className="fixed left-0 top-0 flex h-screen w-[230px] flex-col border-r border-white/10 bg-[#0b111a] px-5 py-6">
        {/* Logo */}

        <Link
          to="/inicio"
          className="mb-10 flex items-center justify-center"
        >
          <img
            src={logo}
            alt="Maré"
            className="h-[70px] w-[140px] object-contain"
          />
        </Link>

        {/* Menu */}

        <nav className="flex flex-col gap-2">
          {menu.map(({ label, icon: Icon, rota }) => {
            const selecionado = ativo === label;

            return (
              <Link
                key={label}
                to={rota}
                onClick={() => setAtivo(label)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-all duration-200 ${
                  selecionado
                    ? "bg-[#1689e8]/15 text-[#1689e8]"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={18} strokeWidth={1.8} />

                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Botão publicar */}

        <Link
          to="/compartilhe"
          className="mt-7 flex items-center justify-center rounded-lg bg-[#1689e8] py-3 text-sm font-semibold text-white transition hover:bg-[#1177cc]"
        >
          Postar
        </Link>

        {/* Configurações */}

        <Link
          to="/acessibilidade"
          className="mt-auto flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
        >
          <Settings size={18} strokeWidth={1.8} />

          <span>Configurações</span>
        </Link>
      </aside>

      {/* ================= CONTEÚDO ================= */}

      <main className="ml-[230px] min-h-screen flex-1">
        {/* Header */}

        <header className="sticky top-0 z-20 border-b border-white/10 bg-[#080d14]/95 px-8 py-4 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1400px] items-center gap-5">
            {/* Busca */}

            <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-[#101722] px-4 py-3 transition focus-within:border-[#1689e8]/70">
              <Search
                size={18}
                className="shrink-0 text-slate-500"
              />

              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar músicas, artistas ou álbuns"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>

            {/* Perfil */}

            <Link
              to="/perfil"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#101722] text-slate-300 transition hover:border-[#1689e8] hover:text-[#1689e8]"
            >
              <UserRound size={19} />
            </Link>
          </div>
        </header>

        {/* Conteúdo central */}

        <div className="mx-auto max-w-[1400px] px-8 pb-12">
          {/* Saudação */}

          <div className="pt-8">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Bom dia, Usuário
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              O que você quer descobrir hoje?
            </p>
          </div>

          {/* ================= EM ALTA ================= */}

          <Secao
            icone={<TrendingUp size={17} />}
            titulo="Em alta"
          >
            {destaques.map((destaque) => (
              <article
                key={destaque.id}
                className={`relative flex h-[170px] min-w-[430px] shrink-0 flex-col justify-end overflow-hidden rounded-xl bg-gradient-to-br ${destaque.bg} p-5 transition-transform duration-200 hover:scale-[1.01]`}
              >
                {/* Overlay */}

                <div className="absolute inset-0 bg-black/20" />

                {/* Tag */}

                <span className="absolute left-5 top-5 z-10 rounded-md border border-white/10 bg-black/20 px-2 py-1 text-[9px] font-semibold tracking-wide text-white backdrop-blur-sm">
                  {destaque.tag}
                </span>

                {/* Texto */}

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white">
                    {destaque.title}
                  </h3>

                  <p className="mt-1 max-w-[380px] text-xs leading-relaxed text-slate-200">
                    {destaque.subtitle}
                  </p>
                </div>
              </article>
            ))}
          </Secao>

          {/* ================= MAIS BEM AVALIADAS ================= */}

          <Secao
            icone={<Star size={17} />}
            titulo="Mais bem avaliadas"
          >
            {filtrar(maisBemAvaliadas).map((album) => (
              <CardAlbum key={album.id} album={album} />
            ))}
          </Secao>

          {/* ================= TALVEZ GOSTE ================= */}

          <Secao
            icone={<Heart size={17} />}
            titulo="Talvez você goste"
          >
            {filtrar(talvezGoste).map((album) => (
              <CardAlbum key={album.id} album={album} />
            ))}
          </Secao>

          {/* Nenhum resultado */}

          {busca &&
            filtrar(maisBemAvaliadas).length === 0 &&
            filtrar(talvezGoste).length === 0 && (
              <div className="mt-12 rounded-xl border border-white/10 bg-[#101722] p-8 text-center">
                <Search
                  size={30}
                  className="mx-auto mb-3 text-slate-600"
                />

                <p className="text-sm font-medium text-white">
                  Nenhum resultado encontrado
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Tente buscar por outro artista, música ou álbum.
                </p>
              </div>
            )}
        </div>
      </main>
    </div>
  );
}

