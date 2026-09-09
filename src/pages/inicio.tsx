import { useState } from "react";
import {
    Search,
    User,
    Star,
    Plus,
    ChevronRight,
} from "lucide-react";

import logo from "../assets/Mare.png";

interface Album {
    id: string;
    title: string;
    artist: string;
    cover: string;
    rating: number;
    meta: string;
}

interface Featured {
    id: string;
    title: string;
    tag: string;
    image: string;
}

const NAV_LINKS = ["Início", "Sobre", "Contato", "FAQ"];

const FEATURED: Featured[] = [
    {
        id: "f1",
        title: "Sinfonia do Amanhã",
        tag: "Em destaque",
        image:
            "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=800&q=80",
    },
    {
        id: "f2",
        title: "Ecos do Deserto",
        tag: "Em destaque",
        image:
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    },
];

const TOP_RATED: Album[] = [
    {
        id: "t1",
        title: "Billie Jean",
        artist: "Michael Jackson",
        cover:
            "https://i.scdn.co/image/ab67616d0000b27332a7d87248d1b75463483df5",
        rating: 5,
        meta: "3:42",
    },
    {
        id: "t2",
        title: "Photograph",
        artist: "Ed Sheeran",
        cover:
            "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400&q=80",
        rating: 4,
        meta: "4:19",
    },
    {
        id: "t3",
        title: "1+1 Legendas",
        artist: "Coletivo Nix",
        cover:
            "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&q=80",
        rating: 4,
        meta: "3:58",
    },
    {
        id: "t4",
        title: "Casa",
        artist: "Sereno",
        cover:
            "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=400&q=80",
        rating: 3,
        meta: "3:10",
    },
    {
        id: "t5",
        title: "Promessas",
        artist: "Cadê Alícia",
        cover:
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80",
        rating: 3,
        meta: "4:02",
    },
];

const MAYBE_LIKE: Album[] = [
    {
        id: "m1",
        title: "Starboy...",
        artist: "The Weeknd",
        cover:
            "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&q=80",
        rating: 5,
        meta: "3:50",
    },
    {
        id: "m2",
        title: "Dangerous Woman",
        artist: "Ariana Grande",
        cover:
            "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&q=80",
        rating: 4,
        meta: "3:27",
    },
    {
        id: "m3",
        title: "Antigo Ar Não Malhar",
        artist: "Sao Jorge",
        cover:
            "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80",
        rating: 4,
        meta: "5:12",
    },
    {
        id: "m4",
        title: "Say Sim",
        artist: "Chanyeol",
        cover:
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80",
        rating: 4,
        meta: "3:33",
    },
    {
        id: "m5",
        title: "Good Days",
        artist: "SZA",
        cover:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
        rating: 5,
        meta: "TIMEZ",
    },
];

const OTHERS: Album[] = [
    {
        id: "o1",
        title: "Sul Dorer",
        artist: "Aloe Iaila",
        cover:
            "https://images.unsplash.com/photo-1509998378909-a5f39f0cb59d?w=400&q=80",
        rating: 3,
        meta: "3:15",
    },
    {
        id: "o2",
        title: "Dinamarcazar",
        artist: "Portamento",
        cover:
            "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=400&q=80",
        rating: 4,
        meta: "4:08",
    },
    {
        id: "o3",
        title: "It's não the Fogo",
        artist: "Paloma Rovadd",
        cover:
            "https://images.unsplash.com/photo-1517230878791-4d28214057c2?w=400&q=80",
        rating: 3,
        meta: "3:44",
    },
    {
        id: "o4",
        title: "leo Preferíss",
        artist: "Zealona",
        cover:
            "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&q=80",
        rating: 4,
        meta: "3:29",
    },
    {
        id: "o5",
        title: "A Máscara sem menor",
        artist: "Adione",
        cover:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
        rating: 4,
        meta: "3:59",
    },
];

function StarRating({ value }: { value: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={10}
                    className={
                        i < value
                            ? "fill-amber-400 text-amber-400"
                            : "fill-slate-700 text-slate-700"
                    }
                />
            ))}
        </div>
    );
}

function AlbumCard({ album }: { album: Album }) {
    return (
        <button
            type="button"
            className="group text-left rounded-lg overflow-hidden bg-slate-900/60 border border-slate-800 hover:border-slate-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
            <div className="aspect-square w-full overflow-hidden bg-slate-800">
                <img
                    src={album.cover}
                    alt={album.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-3">
                <p className="text-sm font-medium text-slate-100 truncate">
                    {album.title}
                </p>

                <p className="text-xs text-slate-500 truncate mb-1.5">
                    {album.artist}
                </p>

                <div className="flex items-center justify-between">
                    <StarRating value={album.rating} />

                    <span className="text-[10px] text-slate-500">
                        {album.meta}
                    </span>
                </div>
            </div>
        </button>
    );
}

function SectionHeader({ title }: { title: string }) {
    return (
        <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-slate-200">
                {title}
            </h2>

            <button
                type="button"
                className="flex items-center gap-0.5 text-xs text-sky-400 hover:text-sky-300"
            >
                Ver mais
                <ChevronRight size={12} />
            </button>
        </div>
    );
}

export default function Home() {
    const [query, setQuery] = useState("");

    return (
        <div className="min-h-screen w-full bg-[#0a0e1a] text-white">

            {/* ================= NAVBAR ================= */}
            <header className="w-full h-[80px] bg-[#0a0e1a] border-b border-slate-800">

                <div className="h-full max-w-[1500px] mx-auto px-8 flex items-center">

                    {/* LOGO */}
                    <div className="w-[180px] flex-shrink-0 flex items-center">
                        <img
                            src={logo}
                            alt="Maré"
                            className="w-[125px] h-auto object-contain"
                        />
                    </div>

                    {/* PESQUISA */}
                    <div className="flex-1 flex justify-center px-8">

                        <div className="w-full max-w-[450px]">

                            <div className="flex items-center gap-3 h-[42px] rounded-full bg-[#111827] border border-slate-700 px-4 transition-all focus-within:border-sky-400">

                                <Search
                                    size={17}
                                    className="text-slate-500 flex-shrink-0"
                                />

                                <input
                                    value={query}
                                    onChange={(e) =>
                                        setQuery(e.target.value)
                                    }
                                    type="text"
                                    placeholder="Buscar músicas, artistas ou álbuns"
                                    className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
                                />

                            </div>

                        </div>

                    </div>

                    {/* LINKS */}
                    <nav className="flex items-center gap-6 flex-shrink-0">

                        {NAV_LINKS.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-sm text-slate-400 hover:text-white transition-colors whitespace-nowrap"
                            >
                                {link}
                            </a>
                        ))}

                    </nav>

                    {/* PERFIL */}
                    <button
                        type="button"
                        className="ml-7 flex-shrink-0 flex items-center gap-2 rounded-full bg-[#111827] border border-slate-700 pl-1 pr-4 py-1.5 text-sm text-slate-200 hover:border-slate-500 transition-colors"
                    >

                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-700">
                            <User size={14} />
                        </span>

                        <span>Sessão</span>

                    </button>

                </div>

            </header>

            {/* ================= CONTEÚDO ================= */}
            <main className="px-8 py-8 max-w-7xl mx-auto">

                {/* SAUDAÇÃO */}
                <div className="mb-8">

                    <h1 className="text-2xl font-semibold text-white">
                        Bom dia, Usuário
                    </h1>

                    <p className="text-sm text-slate-500">
                        Prepare-se para descobrir hoje!
                    </p>

                </div>

                {/* EM ALTA */}
                <section className="mb-10">

                    <SectionHeader title="Em alta" />

                    <div className="grid grid-cols-2 gap-4">

                        {FEATURED.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                className="relative h-40 rounded-xl overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                            >

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                <span className="absolute top-3 left-3 rounded bg-black/50 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-200">
                                    {item.tag}
                                </span>

                                <span className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-white">
                                    <Plus size={12} />
                                </span>

                                <span className="absolute bottom-3 left-4 text-base font-semibold text-white">
                                    {item.title}
                                </span>

                            </button>
                        ))}

                    </div>

                </section>

                {/* MAIS BEM AVALIADAS */}
                <section className="mb-10">

                    <SectionHeader title="Mais bem avaliadas" />

                    <div className="grid grid-cols-5 gap-4">

                        {TOP_RATED.map((album) => (
                            <AlbumCard
                                key={album.id}
                                album={album}
                            />
                        ))}

                    </div>

                </section>

                {/* TALVEZ VOCÊ GOSTE */}
                <section className="mb-10">

                    <SectionHeader title="Talvez você goste" />

                    <div className="grid grid-cols-5 gap-4">

                        {MAYBE_LIKE.map((album) => (
                            <AlbumCard
                                key={album.id}
                                album={album}
                            />
                        ))}

                    </div>

                </section>

                {/* OUTROS */}
                <section>

                    <SectionHeader title="Outros" />

                    <div className="grid grid-cols-5 gap-4">

                        {OTHERS.map((album) => (
                            <AlbumCard
                                key={album.id}
                                album={album}
                            />
                        ))}

                    </div>

                </section>

            </main>

        </div>
    );
}