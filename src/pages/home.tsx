import { useMemo, useState } from "react";
import {
  Bookmark,
  Heart,
  House,
  Music2,
  MessageSquare,
  Search,
  Settings,
  Star,
  UserRound,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

type Tab = "foryou" | "following";

type Post = {
  id: string;
  user: string;
  time: string;
  text: string;
  title: string;
  artist: string;
  rating: number;
  comments: number;
  likes: number;
};

type Recommended = {
  id: string;
  title: string;
  artist: string;
  rating: number;
  cover: string;
};

const POSTS: Record<Tab, Post[]> = {
  foryou: [
    {
      id: "f1",
      user: "Jurema",
      time: "há 2 horas",
      text: "Essa música me transporta para outro universo toda vez que escuto. O trabalho de arranjo dos metais aqui é simplesmente fantástico!",
      title: "Mareada",
      artist: "Orquestra do Atlântico",
      rating: 4.8,
      comments: 18,
      likes: 5,
    },
    {
      id: "f2",
      user: "Carlos_F",
      time: "há 2 horas",
      text: "Alguém mais ansioso para o lançamento do novo álbum na próxima semana? Os singles lançados até agora mostram uma maturidade sonora incrível.",
      title: "Horizonte Sombrio",
      artist: "Lumina Noir",
      rating: 4.5,
      comments: 32,
      likes: 14,
    },
    {
      id: "f3",
      user: "Ana_Musica",
      time: "há 2 horas",
      text: "Simplesmente impecável. A produção vocal e a dinâmica de sintetizadores analógicos criam uma atmosfera nostálgica maravilhosa de synthwave dos anos 80.",
      title: "Retrô Frequência",
      artist: "Vapor Wave Corp",
      rating: 4.9,
      comments: 24,
      likes: 11,
    },
  ],

  following: [
    {
      id: "s1",
      user: "Beto.Sax",
      time: "há 5 horas",
      text: "Ouvi o disco inteiro em uma sentada só. A faixa de abertura já entrega tudo: groove seco e um baixo que não sai da cabeça.",
      title: "Maré Alta",
      artist: "Quarteto Coral",
      rating: 4.6,
      comments: 9,
      likes: 21,
    },
    {
      id: "s2",
      user: "Luana",
      time: "ontem",
      text: "Recomendo para quem gosta de coisas mais contemplativas. Ótimo para ouvir de fone em uma tarde de chuva.",
      title: "Vidro Fosco",
      artist: "Norte Azul",
      rating: 4.2,
      comments: 6,
      likes: 8,
    },
  ],
};

const RECOMMENDED: Recommended[] = [
  {
    id: "r1",
    title: "Lemonade",
    artist: "Jeeja",
    rating: 4.6,
    cover: "bg-gradient-to-br from-lime-300 to-green-600",
  },
  {
    id: "r2",
    title: "Super Pretty Girl",
    artist: "Nicki Nicu.",
    rating: 4.3,
    cover: "bg-gradient-to-br from-rose-300 to-stone-700",
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
    to: "/salvos",
    label: "Salvos",
    icon: Bookmark,
  },
  {
    to: "/perfil",
    label: "Perfil",
    icon: UserRound,
  },
];

function Inicio() {
  const [tab, setTab] = useState<Tab>("foryou");
  const [query, setQuery] = useState("");

  const [liked, setLiked] = useState<
    Record<string, boolean>
  >({});

  const [saved, setSaved] = useState<
    Record<string, boolean>
  >({});

  const posts = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) {
      return POSTS[tab];
    }

    return POSTS[tab].filter((post) =>
      `${post.user} ${post.text} ${post.title} ${post.artist}`
        .toLowerCase()
        .includes(q)
    );
  }, [tab, query]);

  function toggleLike(id: string) {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function toggleSave(id: string) {
    setSaved((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

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
              <Link to="/inicio">
                <img
                  src={logo}
                  alt="Maré"
                  className="h-[60px] w-[150px] object-contain"
                />
              </Link>
            </div>

            {/* MENU */}
            <nav className="mt-8 flex flex-col">

              {SIDE_LINKS.map(
                ({ to, label, icon: Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `flex h-[42px] items-center gap-4 px-8 font-serif text-[15px] transition ${
                        isActive
                          ? "bg-[#1a2130] text-white"
                          : "text-gray-200 hover:bg-[#151c29] hover:text-blue-400"
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
                className="block h-[42px] w-full rounded-lg bg-[#5ea3ee] text-center font-serif text-[15px] leading-[42px] text-white transition hover:bg-[#7ab4f2]"
              >
                Post
              </Link>
            </div>

          </div>

          {/* CONFIGURAÇÕES */}
          <Link
            to="/configuracoes"
            className="flex items-center gap-4 px-8 font-serif text-[15px] text-gray-200 transition hover:bg-[#151c29] hover:text-blue-400"
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

          <div className="mx-auto w-full max-w-[1200px]">

            {/* =================================================
                BUSCA
            ================================================== */}

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
                aria-label="Buscar"
                className="w-full bg-transparent font-serif text-[15px] text-gray-200 outline-none placeholder:text-gray-400"
              />

            </label>

            {/* =================================================
                ÁREA PRINCIPAL
            ================================================== */}

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">

              {/* ===============================
                  COLUNA DO FEED
              =============================== */}

              <section className="min-w-0">

                {/* ABAS */}

                <div
                  role="tablist"
                  aria-label="Feed"
                  className="flex gap-8 border-b border-[#252d38]"
                >

                  {(
                    [
                      ["foryou", "Para você"],
                      ["following", "Seguindo"],
                    ] as [Tab, string][]
                  ).map(([id, label]) => (

                    <button
                      key={id}
                      type="button"
                      role="tab"
                      aria-selected={tab === id}
                      onClick={() =>
                        setTab(id)
                      }
                      className={`border-b-2 pb-2 font-serif text-[13px] transition ${
                        tab === id
                          ? "border-blue-400 text-white"
                          : "border-transparent text-gray-500 hover:text-blue-400"
                      }`}
                    >
                      {label}
                    </button>

                  ))}

                </div>

                {/* FEED */}

                <div className="mt-5 flex max-h-[calc(100vh-180px)] flex-col gap-4 overflow-y-auto pr-3 [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-track]:rounded [&::-webkit-scrollbar-track]:bg-[#131a2c] [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-[#4a9be8]">

                  {/* SEM RESULTADO */}

                  {posts.length === 0 && (
                    <p className="py-10 text-center font-serif text-[13px] text-gray-500">
                      Nenhum resultado para "{query}".
                    </p>
                  )}

                  {/* PUBLICAÇÕES */}

                  {posts.map((post) => (

                    <article
                      key={post.id}
                      className="w-full rounded-xl border border-[#252d38] bg-[#0d121c] p-4 transition hover:border-[#33445d]"
                    >

                      {/* AUTOR */}

                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1a2130]">
                          <UserRound
                            size={18}
                            strokeWidth={1.5}
                            className="text-gray-300"
                          />
                        </div>

                        <div className="min-w-0">

                          <p className="font-serif text-[14px] text-gray-100">
                            {post.user}
                          </p>

                          <p className="mt-1 font-serif text-[10px] text-gray-500">
                            {post.time}
                          </p>

                        </div>

                      </div>

                      {/* TEXTO */}

                      <p className="my-4 break-words font-serif text-[13px] leading-[1.7] text-gray-200">
                        {post.text}
                      </p>

                      {/* MÚSICA */}

                      <button
                        type="button"
                        className="flex w-full items-center gap-4 rounded-lg border border-[#252d38] bg-[#10151f] p-3 text-left transition hover:border-[#3a73c4]"
                      >

                        <div className="h-[55px] w-[55px] shrink-0 rounded-md bg-gray-600" />

                        <div className="min-w-0 flex-1">

                          <p className="truncate font-serif text-[13px] text-gray-100">
                            {post.title}
                          </p>

                          <p className="mt-1 truncate font-serif text-[10px] text-gray-500">
                            {post.artist}
                          </p>

                        </div>

                        <span className="flex shrink-0 items-center gap-1 text-[11px] text-gray-300">

                          <Star
                            size={13}
                            strokeWidth={1.5}
                            fill="currentColor"
                          />

                          {post.rating.toFixed(1)}

                        </span>

                      </button>

                      {/* AÇÕES */}

                      <div className="mt-4 flex items-center justify-between text-gray-500">

                        <div className="flex items-center gap-5">

                          {/* COMENTÁRIOS */}

                          <button
                            type="button"
                            aria-label="Comentários"
                            className="flex items-center gap-1.5 font-serif text-[11px] transition hover:text-blue-400"
                          >
                            <MessageSquare
                              size={16}
                              strokeWidth={1.5}
                            />

                            {post.comments}

                          </button>

                          {/* CURTIR */}

                          <button
                            type="button"
                            aria-label="Curtir"
                            aria-pressed={
                              !!liked[post.id]
                            }
                            onClick={() =>
                              toggleLike(post.id)
                            }
                            className={`flex items-center gap-1.5 font-serif text-[11px] transition ${
                              liked[post.id]
                                ? "text-blue-400"
                                : "hover:text-blue-400"
                            }`}
                          >

                            <Heart
                              size={16}
                              strokeWidth={1.5}
                              fill={
                                liked[post.id]
                                  ? "currentColor"
                                  : "none"
                              }
                            />

                            {post.likes +
                              (liked[post.id]
                                ? 1
                                : 0)}

                          </button>

                        </div>

                        {/* SALVAR */}

                        <button
                          type="button"
                          aria-label={
                            saved[post.id]
                              ? "Remover dos salvos"
                              : "Salvar"
                          }
                          aria-pressed={
                            !!saved[post.id]
                          }
                          onClick={() =>
                            toggleSave(post.id)
                          }
                          className={`transition ${
                            saved[post.id]
                              ? "text-blue-400"
                              : "text-gray-500 hover:text-blue-400"
                          }`}
                        >

                          <Bookmark
                            size={17}
                            strokeWidth={1.5}
                            fill={
                              saved[post.id]
                                ? "currentColor"
                                : "none"
                            }
                          />

                        </button>

                      </div>

                    </article>

                  ))}

                </div>

              </section>

              {/* ===============================
                  RECOMENDADAS
              =============================== */}

              <aside className="lg:pt-[58px]">

                <div className="rounded-xl border border-[#252d38] bg-[#0d121c] p-4">

                  <h2 className="font-serif text-[16px] text-gray-100">
                    Músicas recomendadas
                  </h2>

                  <div className="mt-4 flex flex-col gap-3">

                    {RECOMMENDED.map(
                      (musica) => (

                        <button
                          key={musica.id}
                          type="button"
                          className="flex w-full items-center gap-3 rounded-lg border border-[#252d38] bg-[#10151f] p-3 text-left transition hover:border-[#3a73c4]"
                        >

                          <div
                            className={`h-[52px] w-[52px] shrink-0 rounded-md ${musica.cover}`}
                          />

                          <div className="min-w-0 flex-1">

                            <p className="truncate font-serif text-[12px] text-gray-100">
                              {musica.title}
                            </p>

                            <p className="mt-1 truncate font-serif text-[10px] text-gray-500">
                              {musica.artist}
                            </p>

                            <p className="mt-2 flex items-center gap-1 font-serif text-[9px] text-gray-500">

                              <Star
                                size={11}
                                strokeWidth={1.5}
                                fill="currentColor"
                              />

                              {musica.rating.toFixed(
                                1
                              )}

                            </p>

                          </div>

                        </button>

                      )
                    )}

                  </div>

                </div>

              </aside>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
}

export default Inicio;