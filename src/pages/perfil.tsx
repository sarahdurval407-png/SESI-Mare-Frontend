import { useEffect, useRef, useState } from "react";
import {
  Bookmark,
  Camera,
  Check,
  EllipsisVertical,
  House,
  Music2,
  Pencil,
  Search,
  Settings,
  Share2,
  Star,
  UserRound,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

type ProfileTab = "reviews" | "comments";

type Review = {
  id: string;
  title: string;
  artist: string;
  rating: number;
  text: string;
  cover: string;
};

const REVIEWS: Review[] = [
  {
    id: "r1",
    title: "pov",
    artist: "Ariana Grande",
    rating: 4,
    text: '"POV" é uma música bem bonita e gostosa de ouvir. A voz da Ariana combina muito com a vibe da música, e a letra é bem fofa. Só acho um pouco repetitiva, mas ainda assim é uma música que eu gosto bastante.',
    cover: "bg-gradient-to-br from-emerald-800 to-slate-900",
  },
  {
    id: "r2",
    title: "My Love",
    artist: "Justin Timberlake",
    rating: 3,
    text: "A música tem uma produção muito boa e um ritmo marcante, além de uma batida que combina bastante com o estilo do Justin Timberlake. A voz dele também funciona muito bem na faixa. Porém, apesar de ser gostosa de ouvir, não é uma música que me prende tanto pela letra ou pela melodia. É boa, mas não chega a ser inesquecível.",
    cover: "bg-gradient-to-br from-neutral-800 to-neutral-950",
  },
];

const COMMENTS: { id: string; text: string; on: string }[] = [
  {
    id: "c1",
    text: "Concordo total, a produção dessa faixa é impecável.",
    on: 'em "Mareada" de Orquestra do Atlântico',
  },
];

const SIDE_LINKS = [
  { to: "/home", label: "Início", icon: House },
  { to: "/musicas", label: "Explorar", icon: Music2 },
  { to: "/salva", label: "Salvos", icon: Bookmark },
  { to: "/perfil", label: "Perfil", icon: UserRound },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`Nota ${rating} de 5`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={14}
          strokeWidth={1.5}
          className={
            n <= rating ? "text-blue-400" : "text-gray-600"
          }
          fill={n <= rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

function Perfil() {
  const [tab, setTab] = useState<ProfileTab>("reviews");
  const [query, setQuery] = useState("");

  // Dados do perfil
  const [username, setUsername] = useState("Usuário");
  const [bio, setBio] = useState("Bio");

  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const [editing, setEditing] = useState(false);

  const [draftUsername, setDraftUsername] =
    useState(username);

  const [draftBio, setDraftBio] = useState(bio);

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const bannerInputRef = useRef<HTMLInputElement>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);

  const [shareFeedback, setShareFeedback] =
    useState<string | null>(null);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        onClickOutside
      );
    };
  }, []);

  // Libera memória das imagens
  useEffect(() => {
    return () => {
      if (bannerUrl) {
        URL.revokeObjectURL(bannerUrl);
      }
    };
  }, [bannerUrl]);

  useEffect(() => {
    return () => {
      if (avatarUrl) {
        URL.revokeObjectURL(avatarUrl);
      }
    };
  }, [avatarUrl]);

  function handleImagePick(
    e: React.ChangeEvent<HTMLInputElement>,
    setUrl: React.Dispatch<
      React.SetStateAction<string | null>
    >
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUrl((prev) => {
      if (prev) {
        URL.revokeObjectURL(prev);
      }

      return URL.createObjectURL(file);
    });

    e.target.value = "";
  }

  function startEditing() {
    setDraftUsername(username);
    setDraftBio(bio);
    setEditing(true);
    setMenuOpen(false);
  }

  function saveEditing() {
    const trimmedUser = draftUsername.trim();

    setUsername(trimmedUser || username);
    setBio(draftBio.trim());

    setEditing(false);
  }

  function cancelEditing() {
    setEditing(false);
  }

  async function handleShare() {
    const url = window.location.href;

    const shareData = {
      title: `${username} · Maré`,
      text: `Confira o perfil de ${username} na Maré`,
      url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(url);

      setShareFeedback("Link copiado!");
    } catch {
      setShareFeedback(
        "Não foi possível compartilhar"
      );
    } finally {
      window.setTimeout(
        () => setShareFeedback(null),
        2200
      );
    }
  }

  // Filtra as avaliações pela busca
  const reviewsFiltradas = REVIEWS.filter((review) => {
    const texto = `
      ${review.title}
      ${review.artist}
      ${review.text}
    `.toLowerCase();

    return texto.includes(query.toLowerCase());
  });

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
              aria-label="Buscar"
              className="w-full bg-transparent font-serif text-[15px] text-gray-200 outline-none placeholder:text-gray-400"
            />

          </label>

          <h1 className="mt-8 font-serif text-[26px] text-gray-100">
            Perfil
          </h1>

          {/* =====================================================
              CARD DE PERFIL
          ====================================================== */}

          <section className="relative mx-auto mt-6 max-w-[1200px] overflow-visible rounded-xl border border-[#252d38] bg-[#0d121c]">

            {/* INPUT CAPA */}
            <input
              ref={bannerInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                handleImagePick(
                  e,
                  setBannerUrl
                )
              }
            />

            {/* INPUT AVATAR */}
            <input
              ref={avatarInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                handleImagePick(
                  e,
                  setAvatarUrl
                )
              }
            />

            {/* CAPA */}
            <div
              className="h-[110px] rounded-t-xl bg-[#141a28] bg-cover bg-center"
              style={
                bannerUrl
                  ? {
                      backgroundImage: `url(${bannerUrl})`,
                    }
                  : undefined
              }
            />

            {/* CABEÇALHO */}
            <div className="flex items-start justify-between px-6 pb-5 pt-4">

              <div className="flex items-center gap-4">

                {/* FOTO */}
                <div
                  className="-mt-14 flex h-[70px] w-[70px] shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-[#0d121c] bg-[#1a2130] bg-cover bg-center"
                  style={
                    avatarUrl
                      ? {
                          backgroundImage: `url(${avatarUrl})`,
                        }
                      : undefined
                  }
                >
                  {!avatarUrl && (
                    <UserRound
                      size={30}
                      strokeWidth={1.5}
                      className="text-gray-400"
                    />
                  )}
                </div>

                {/* NOME E BIO */}
                <div>
                  <p className="font-serif text-[17px] text-gray-100">
                    {username}
                  </p>

                  <p className="mt-1 font-serif text-[11px] text-gray-500">
                    {bio || "Sem bio"}
                  </p>
                </div>

              </div>

              {/* AÇÕES */}
              <div className="flex items-center gap-4 pt-1 text-gray-300">

                {/* COMPARTILHAR */}
                <div className="relative">

                  <button
                    type="button"
                    onClick={handleShare}
                    aria-label="Compartilhar perfil"
                    className="transition hover:text-blue-400"
                  >
                    <Share2
                      size={17}
                      strokeWidth={1.5}
                    />
                  </button>

                  {shareFeedback && (
                    <span className="absolute right-0 top-[26px] whitespace-nowrap rounded bg-[#1a2130] px-2 py-1 font-serif text-[10px] text-gray-200 shadow">
                      {shareFeedback}
                    </span>
                  )}

                </div>

                {/* MENU */}
                <div
                  className="relative"
                  ref={menuRef}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setMenuOpen((v) => !v)
                    }
                    aria-label="Mais opções"
                    aria-expanded={menuOpen}
                    className="transition hover:text-blue-400"
                  >
                    <EllipsisVertical
                      size={17}
                      strokeWidth={1.5}
                    />
                  </button>

                  {menuOpen && (
                    <div className="absolute right-0 top-[26px] z-10 w-[170px] overflow-hidden rounded-lg border border-[#252d38] bg-[#111726] shadow-lg">

                      <button
                        type="button"
                        onClick={startEditing}
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-left font-serif text-[12px] text-gray-200 transition hover:bg-[#1a2130] hover:text-blue-400"
                      >
                        <Pencil
                          size={14}
                          strokeWidth={1.5}
                        />

                        Editar perfil
                      </button>

                    </div>
                  )}

                </div>

              </div>

            </div>

            {/* SEGUIDORES */}
            <div className="flex gap-6 px-6 pb-5 font-serif text-[12px] text-gray-400">

              <span>
                <strong className="text-gray-200">
                  70
                </strong>{" "}
                Seguidores
              </span>

              <span>
                <strong className="text-gray-200">
                  87
                </strong>{" "}
                Seguindo
              </span>

            </div>

          </section>

          {/* =====================================================
              ABAS
          ====================================================== */}

          <div className="mx-auto mt-6 flex max-w-[1200px] gap-8 border-b border-[#252d38]">

            {(
              [
                ["reviews", "Últimas Avaliações"],
                ["comments", "Comentários"],
              ] as [ProfileTab, string][]
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

          {/* =====================================================
              CONTEÚDO DAS ABAS
          ====================================================== */}

          <div className="mx-auto mt-5 flex max-w-[1200px] flex-col gap-4 pb-10">

            {/* =================================================
                AVALIAÇÕES
            ================================================== */}

            {tab === "reviews" &&
              reviewsFiltradas.map((r) => (

                <article
                  key={r.id}
                  className="flex w-full min-w-0 items-center gap-5 rounded-xl border border-[#252d38] bg-[#0d121c] p-4"
                >

                  {/* CAPA */}
                  <div
                    className={`h-[80px] w-[80px] shrink-0 rounded-md ${r.cover}`}
                  />

                  {/* INFORMAÇÕES DA MÚSICA */}
                  <div className="flex w-[125px] shrink-0 flex-col justify-center">

                    <p className="break-words font-serif text-[14px] leading-tight text-gray-100">
                      {r.title}
                    </p>

                    <p className="mt-1 break-words font-serif text-[11px] leading-tight text-gray-500">
                      {r.artist}
                    </p>

                    <div className="mt-4">
                      <Stars
                        rating={r.rating}
                      />
                    </div>

                  </div>

                  {/* DIVISÓRIA */}
                  <div className="h-[75px] w-px shrink-0 bg-[#252d38]" />

                  {/* TEXTO DA AVALIAÇÃO */}
                  <div className="min-w-0 flex-1 self-center">

                    <p className="w-full break-words font-serif text-[11px] leading-[1.7] text-gray-300">
                      {r.text}
                    </p>

                  </div>

                </article>

              ))}

            {/* =================================================
                CASO NÃO ENCONTRE AVALIAÇÃO
            ================================================== */}

            {tab === "reviews" &&
              reviewsFiltradas.length === 0 && (
                <p className="py-10 text-center font-serif text-[13px] text-gray-500">
                  Nenhuma avaliação encontrada.
                </p>
              )}

            {/* =================================================
                COMENTÁRIOS
            ================================================== */}

            {tab === "comments" &&
              (COMMENTS.length ? (

                COMMENTS.map((c) => (

                  <article
                    key={c.id}
                    className="w-full rounded-xl border border-[#252d38] bg-[#0d121c] p-4"
                  >

                    <p className="break-words font-serif text-[12px] leading-[1.6] text-gray-100">
                      {c.text}
                    </p>

                    <p className="mt-2 font-serif text-[10px] text-gray-500">
                      {c.on}
                    </p>

                  </article>

                ))

              ) : (

                <p className="py-10 text-center font-serif text-[13px] text-gray-500">
                  Nenhum comentário ainda.
                </p>

              ))}

          </div>

        </div>
      </div>

      {/* =====================================================
          MODAL DE EDIÇÃO
      ====================================================== */}

      {editing && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={cancelEditing}
        >

          <div
            className="w-full max-w-[420px] overflow-hidden rounded-xl border border-[#252d38] bg-[#0d121c]"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* CAPA */}
            <div
              className="group relative h-[100px] bg-[#141a28] bg-cover bg-center"
              style={
                bannerUrl
                  ? {
                      backgroundImage: `url(${bannerUrl})`,
                    }
                  : undefined
              }
            >

              <button
                type="button"
                onClick={() =>
                  bannerInputRef.current?.click()
                }
                className="absolute inset-0 flex items-center justify-center gap-2 bg-black/50 font-serif text-[12px] text-gray-100 opacity-0 transition hover:opacity-100 focus:opacity-100"
              >
                <Camera
                  size={16}
                  strokeWidth={1.5}
                />

                Alterar capa
              </button>

            </div>

            <div className="px-6 pb-6">

              {/* FOTO */}
              <div className="group relative -mt-8 h-[64px] w-[64px]">

                <div
                  className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border-4 border-[#0d121c] bg-[#1a2130] bg-cover bg-center"
                  style={
                    avatarUrl
                      ? {
                          backgroundImage: `url(${avatarUrl})`,
                        }
                      : undefined
                  }
                >
                  {!avatarUrl && (
                    <UserRound
                      size={26}
                      strokeWidth={1.5}
                      className="text-gray-400"
                    />
                  )}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    avatarInputRef.current?.click()
                  }
                  aria-label="Alterar foto de perfil"
                  className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 text-gray-100 opacity-0 transition hover:opacity-100 focus:opacity-100"
                >
                  <Camera
                    size={16}
                    strokeWidth={1.5}
                  />
                </button>

              </div>

              <h2 className="mt-4 font-serif text-[16px] text-gray-100">
                Editar perfil
              </h2>

              {/* NOME */}
              <label className="mt-4 block font-serif text-[11px] text-gray-400">

                Nome de usuário

                <input
                  type="text"
                  value={draftUsername}
                  onChange={(e) =>
                    setDraftUsername(
                      e.target.value
                    )
                  }
                  placeholder="Nome de usuário"
                  maxLength={40}
                  className="mt-1 w-full rounded border border-[#252d38] bg-[#111726] px-3 py-2 font-serif text-[13px] text-gray-100 outline-none focus:border-blue-400"
                />

              </label>

              {/* BIO */}
              <label className="mt-3 block font-serif text-[11px] text-gray-400">

                Bio

                <textarea
                  value={draftBio}
                  onChange={(e) =>
                    setDraftBio(e.target.value)
                  }
                  placeholder="Bio"
                  maxLength={120}
                  rows={3}
                  className="mt-1 w-full resize-none rounded border border-[#252d38] bg-[#111726] px-3 py-2 font-serif text-[12px] text-gray-100 outline-none focus:border-blue-400"
                />

              </label>

              {/* BOTÕES */}
              <div className="mt-5 flex justify-end gap-3">

                <button
                  type="button"
                  onClick={cancelEditing}
                  className="rounded-lg border border-[#252d38] px-4 py-2 font-serif text-[12px] text-gray-300 transition hover:text-red-400"
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  onClick={saveEditing}
                  className="flex items-center gap-2 rounded-lg bg-[#5ea3ee] px-4 py-2 font-serif text-[12px] text-white transition hover:bg-[#7ab4f2]"
                >
                  <Check
                    size={14}
                    strokeWidth={2}
                  />

                  Salvar
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Perfil;