import { useState, type ReactNode } from "react";
import {
  Home,
  Music2,
  Bookmark,
  User,
  Settings,
  Search,
  TrendingUp,
  Star,
  Heart,
} from "lucide-react";

/* ================= Tipos e dados ================= */

type Album = {
  id: number;
  title: string;
  artist: string;
  rating: number;
  reviews: string;
  bg: string;
  cover: string;
};

const destaques = [
  { id: 1, title: "Sinfonia do Amanhã", subtitle: "Um álbum instrumental que mistura sintetizadores e orquestra.", tag: "EXCLUSIVO", bg: "from-indigo-950 via-slate-900 to-blue-900" },
  { id: 2, title: "Ecos do Deserto", subtitle: "Percussão, violão e paisagens sonoras do sertão.", tag: "EXCLUSIVO", bg: "from-zinc-600 to-amber-900" },
];

const maisBemAvaliadas: Album[] = [
  { id: 1, title: "Billie Jean", artist: "Michael Jackson", rating: 5, reviews: "1,2 mil avaliações", bg: "bg-gradient-to-br from-neutral-100 to-neutral-400", cover: "MJ" },
  { id: 2, title: "Photograph", artist: "Ed Sheeran", rating: 5, reviews: "980 avaliações", bg: "bg-green-500", cover: "✕" },
  { id: 3, title: "10 Ligações", artist: "Rock Lee de Barro", rating: 4, reviews: "640 avaliações", bg: "bg-gradient-to-br from-red-950 to-neutral-900", cover: "" },
  { id: 4, title: "Ciara", artist: "Ciara", rating: 5, reviews: "410 avaliações", bg: "bg-gradient-to-br from-amber-100 to-stone-300", cover: "" },
];

const talvezGoste: Album[] = [
  { id: 5, title: "Starboy", artist: "The Weeknd", rating: 5, reviews: "2 mil avaliações", bg: "bg-gradient-to-b from-red-600 to-blue-950", cover: "STARBOY" },
  { id: 6, title: "Dangerous Woman", artist: "Ariana Grande", rating: 4, reviews: "1,1 mil avaliações", bg: "bg-gradient-to-br from-neutral-200 to-neutral-500", cover: "" },
  { id: 7, title: "Amigo do Rei", artist: "Seu Jorge", rating: 5, reviews: "530 avaliações", bg: "bg-gradient-to-br from-red-600 to-yellow-500", cover: "SEU JORGE" },
  { id: 8, title: "Say So", artist: "Doja Cat", rating: 4, reviews: "870 avaliações", bg: "bg-gradient-to-br from-fuchsia-500 to-pink-300", cover: "" },
];

const plataformas = [
  { nome: "Spotify", cor: "bg-green-500" },
  { nome: "YouTube Music", cor: "bg-red-500" },
  { nome: "Amazon Music", cor: "bg-sky-400" },
  { nome: "Apple Music", cor: "bg-pink-500" },
];

const relacionadas = [
  { id: 1, titulo: "Álbum 1", bg: "bg-gradient-to-br from-amber-200 to-orange-700" },
  { id: 2, titulo: "Oriente", bg: "bg-gradient-to-br from-stone-300 to-stone-600" },
  { id: 3, titulo: "Palavras no Corpo", bg: "bg-gradient-to-br from-sky-300 to-red-500" },
  { id: 4, titulo: "Álbum 4", bg: "bg-gradient-to-br from-sky-400 to-amber-500" },
];

const posts = [
  { id: 1, autor: "Usuária", texto: "Lorem ipsum lorem lorem ipsum..." },
  { id: 2, autor: "Usuária", texto: "Lorem ipsum lorem lorem ipsum..." },
];

const menu = [
  { label: "Início", icon: Home },
  { label: "Explorar", icon: Music2 },
  { label: "Salvos", icon: Bookmark },
  { label: "Perfil", icon: User },
] as const;

/* ================= Componentes compartilhados ================= */

function Estrelas({
  valor,
  tamanho = 10,
  onChange,
}: {
  valor: number;
  tamanho?: number;
  onChange?: (n: number) => void;
}) {
  const [hover, setHover] = useState(0);
  const mostrado = hover || valor;
  return (
    <div className="flex gap-0.5" onMouseLeave={() => setHover(0)}>
      {Array.from({ length: 5 }, (_, i) => {
        const n = i + 1;
        return (
          <button
            key={n}
            type="button"
            disabled={!onChange}
            onMouseEnter={() => onChange && setHover(n)}
            onClick={() => onChange?.(n)}
            aria-label={`${n} de 5 estrelas`}
            className="disabled:cursor-default"
          >
            <Star
              size={tamanho}
              className={n <= mostrado ? "fill-yellow-400 text-yellow-400" : "text-slate-500"}
            />
          </button>
        );
      })}
    </div>
  );
}

function Sidebar({ ativo, onSelecionar }: { ativo: string; onSelecionar: (l: string) => void }) {
  return (
    <aside className="flex w-56 shrink-0 flex-col border-r border-white/5 bg-[#0e1526] p-4">
      <div className="mb-8 px-2 pt-2">
        <span className="text-2xl font-black italic tracking-wider text-sky-500">MARÉ</span>
      </div>
      <nav className="flex flex-col gap-1">
        {menu.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => onSelecionar(label)}
            className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors ${
              ativo === label ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5"
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </nav>
      <button className="mx-auto mt-6 w-40 rounded bg-sky-400 py-2 text-sm font-semibold text-slate-900 hover:bg-sky-300">
        Post
      </button>
      <button className="mt-auto flex items-center gap-3 px-3 py-2 text-sm text-slate-300 hover:text-white">
        <Settings size={16} />
        Configurações
      </button>
    </aside>
  );
}

function BarraBusca({ valor, onChange }: { valor: string; onChange: (v: string) => void }) {
  return (
    <label className="flex items-center gap-2 rounded-md bg-[#151d30] px-3 py-2">
      <Search size={16} className="text-slate-400" />
      <input
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar..."
        className="w-full bg-transparent text-sm placeholder:text-slate-500 focus:outline-none"
      />
    </label>
  );
}

/* ================= Página: Explorar ================= */

function CardAlbum({ album, onAbrir }: { album: Album; onAbrir: (a: Album) => void }) {
  return (
    <article
      onClick={() => onAbrir(album)}
      className="w-44 shrink-0 cursor-pointer rounded-lg border border-white/5 bg-[#121a2b] p-2.5 hover:border-sky-400/40"
    >
      <div className={`flex aspect-square items-center justify-center rounded ${album.bg} text-2xl font-black text-white/90`}>
        {album.cover}
      </div>
      <h3 className="mt-2 truncate text-xs font-semibold text-slate-100">{album.title}</h3>
      <p className="truncate text-[10px] text-slate-400">{album.artist}</p>
      <div className="mt-1 flex items-center justify-between">
        <Estrelas valor={album.rating} tamanho={9} />
        <span className="text-[8px] text-slate-500">{album.reviews}</span>
      </div>
    </article>
  );
}

function Secao({ icone, titulo, children }: { icone: ReactNode; titulo: string; children: ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="mb-3 flex items-center gap-1.5 text-xs font-medium text-slate-200">
        <span className="text-sky-400">{icone}</span>
        {titulo}
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {children}
      </div>
    </section>
  );
}

function Explorar({ onAbrir }: { onAbrir: (a: Album) => void }) {
  const [busca, setBusca] = useState("");
  const filtrar = (lista: Album[]) =>
    lista.filter((a) => `${a.title} ${a.artist}`.toLowerCase().includes(busca.toLowerCase()));

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="sticky top-0 z-10 bg-[#0b111e] p-3">
        <BarraBusca valor={busca} onChange={setBusca} />
      </div>
      <div className="px-6 pb-10">
        <h1 className="mt-4 text-lg font-semibold text-white">Bom dia, Usuário</h1>
        <p className="text-[10px] text-slate-400">O que você quer descobrir hoje?</p>

        <Secao icone={<TrendingUp size={12} />} titulo="Em alta">
          {destaques.map((d) => (
            <div
              key={d.id}
              className={`relative flex h-32 w-[26rem] shrink-0 flex-col justify-end overflow-hidden rounded-lg bg-gradient-to-br ${d.bg} p-4`}
            >
              <span className="absolute left-3 top-3 rounded bg-white/20 px-1.5 py-0.5 text-[8px] font-semibold text-white">
                {d.tag}
              </span>
              <h3 className="text-sm font-semibold text-white">{d.title}</h3>
              <p className="text-[9px] text-slate-300">{d.subtitle}</p>
            </div>
          ))}
        </Secao>

        <Secao icone={<Star size={12} />} titulo="Mais bem avaliadas">
          {filtrar(maisBemAvaliadas).map((a) => (
            <CardAlbum key={a.id} album={a} onAbrir={onAbrir} />
          ))}
        </Secao>

        <Secao icone={<Heart size={12} />} titulo="Talvez você goste">
          {filtrar(talvezGoste).map((a) => (
            <CardAlbum key={a.id} album={a} onAbrir={onAbrir} />
          ))}
        </Secao>
      </div>
    </main>
  );
}

/* ================= Página: Música ================= */

function Musica({ album }: { album: Album }) {
  const [busca, setBusca] = useState("");
  const [nota, setNota] = useState(0);

  return (
    <main className="flex flex-1 gap-8 overflow-y-auto p-3">
      <div className="min-w-0 flex-1">
        <BarraBusca valor={busca} onChange={setBusca} />

        <div className={`mt-6 h-36 rounded-lg border border-white/5 ${album.bg}`} />

        <div className="mt-3 flex items-start justify-between">
          <div>
            <h1 className="text-xl font-semibold text-white">{album.title}</h1>
            <div className="mt-1 flex items-center gap-1.5 text-[10px] text-slate-300">
              <span className="h-3 w-3 rounded-full bg-slate-300" />
              {album.artist}
            </div>
          </div>
          <div className="flex items-center gap-3 pt-1">
            <Estrelas valor={nota} onChange={setNota} tamanho={14} />
            <span className="text-[10px] text-slate-500">{nota.toFixed(1)}</span>
          </div>
        </div>

        <section className="mt-4 rounded-lg border border-white/5 bg-[#141d31] p-3">
          <h2 className="text-[11px] font-semibold text-white">Ouvir</h2>
          <p className="mb-2 text-[8px] text-slate-400">Conecte a plataforma que você usa para ouvir.</p>
          <div className="grid grid-cols-2 gap-2">
            {plataformas.map((p) => (
              <a key={p.nome} href="#" className="flex items-center gap-2 rounded bg-[#0e1526] px-2.5 py-2 text-[9px] hover:bg-[#182238]">
                <span className={`h-2.5 w-2.5 rounded-full ${p.cor}`} />
                {p.nome}
              </a>
            ))}
          </div>
        </section>

        <section className="mt-4">
          <h2 className="mb-2 text-[10px] text-slate-200">Músicas relacionadas</h2>
          <div className="flex gap-2">
            {relacionadas.map((r) => (
              <div key={r.id} title={r.titulo} className={`aspect-square w-[5.6rem] rounded ${r.bg}`} />
            ))}
          </div>
        </section>

        <button className="mt-4 w-full rounded bg-sky-400 py-2.5 text-sm font-medium text-slate-900 hover:bg-sky-300">
          Adicionar um post
        </button>
      </div>

      <aside className="w-64 shrink-0 pt-6">
        <h2 className="mb-4 text-center text-xs text-slate-200">Posts relacionados</h2>
        <div className="flex flex-col gap-3">
          {posts.map((p) => (
            <article key={p.id} className="rounded-lg bg-[#0f1626] p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[9px] text-slate-300">
                  <span className="h-4 w-4 rounded-full bg-slate-300" />
                  {p.autor}
                </div>
                <Estrelas valor={0} tamanho={8} />
              </div>
              <p className="mt-3 text-[8px] text-slate-200">{p.texto}</p>
            </article>
          ))}
        </div>
      </aside>
    </main>
  );
}

/* ================= App ================= */

export default function App() {
  const [ativo, setAtivo] = useState("Explorar");
  const [aberto, setAberto] = useState<Album | null>(null);

  const selecionar = (label: string) => {
    setAtivo(label);
    setAberto(null); // volta para a listagem ao trocar de menu
  };

  return (
    <div className="flex h-screen bg-[#0b111e] font-serif text-slate-200">
      <Sidebar ativo={ativo} onSelecionar={selecionar} />
      {aberto ? <Musica album={aberto} /> : <Explorar onAbrir={setAberto} />}
    </div>
  );
}
