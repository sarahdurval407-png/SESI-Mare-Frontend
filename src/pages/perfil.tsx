import { useRef, useState } from "react";
import {
    Plus,
    CircleUserRound,
    UserRound,
    Pencil,
    Settings,
    Star,
} from "lucide-react";

import logo from "../assets/Mare.png";

interface Review {
    id: string;
    songTitle: string;
    artist: string;
    comment: string;
    rating: number;
    cover?: string;
}

const PLAYLIST_COUNT = 7;

const REVIEWS: Review[] = [
    {
        id: "r1",
        songTitle: "Nome da música",
        artist: "Nome do artista",
        comment: "Comentário da música",
        rating: 4,
    },
    {
        id: "r2",
        songTitle: "Nome da música",
        artist: "Nome do artista",
        comment: "Comentário da música",
        rating: 2,
    },
    {
        id: "r3",
        songTitle: "Nome da música",
        artist: "Nome do artista",
        comment: "Comentário da música",
        rating: 5,
    },
];

function StarRating({ value }: { value: number }) {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={14}
                    className={
                        i < value
                            ? "fill-sky-400 text-sky-400"
                            : "fill-transparent text-slate-600"
                    }
                />
            ))}
        </div>
    );
}

function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="w-full flex items-center gap-5 rounded-xl bg-[#111827]/70 border border-slate-800 p-4 hover:border-slate-700 transition-colors">

            {/* CAPA */}
            <div className="h-[72px] w-[72px] shrink-0 rounded-lg overflow-hidden bg-slate-800">

                {review.cover ? (
                    <img
                        src={review.cover}
                        alt={review.songTitle}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="h-full w-full flex items-center justify-center">
                        <Star
                            size={22}
                            className="text-slate-600"
                        />
                    </div>
                )}

            </div>

            {/* INFORMAÇÕES DA MÚSICA */}
            <div className="w-[190px] shrink-0">

                <p className="text-sm font-medium text-slate-100 truncate">
                    {review.songTitle}
                </p>

                <p className="text-xs text-slate-500 truncate mt-1 mb-2">
                    {review.artist}
                </p>

                <StarRating value={review.rating} />

            </div>

            {/* COMENTÁRIO */}
            <div className="flex-1 min-w-0 border-l border-slate-800 pl-5">

                <p className="text-sm leading-relaxed text-slate-400">
                    {review.comment}
                </p>

            </div>

        </div>
    );
}

export default function ProfilePage() {

    const [name, setName] = useState("Nome");
    const [editingName, setEditingName] = useState(false);

    // FOTO DE PERFIL
    const [profileImage, setProfileImage] = useState<string | null>(null);

    // REFERÊNCIA PARA O INPUT DE ARQUIVO
    const fileInputRef = useRef<HTMLInputElement>(null);

    // ALTERAR FOTO DE PERFIL
    const handleProfileImage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];

        if (!file) return;

        // Verifica se realmente é uma imagem
        if (!file.type.startsWith("image/")) {
            alert("Selecione uma imagem válida.");
            return;
        }

        // Cria uma URL temporária para mostrar a imagem
        const imageUrl = URL.createObjectURL(file);

        setProfileImage(imageUrl);
    };

    return (
        <div className="min-h-screen w-full bg-[#0a0e1a] text-white">

            {/* ================= NAVBAR ================= */}
            <header className="w-full h-[80px] border-b border-slate-800 bg-[#0a0e1a]">

                <div className="max-w-[1500px] h-full mx-auto px-8 flex items-center justify-between">

                    {/* LOGO */}
                    <div className="w-[180px] flex items-center">

                        <img
                            src={logo}
                            alt="Maré"
                            className="w-[125px] h-auto object-contain"
                        />

                    </div>

                    {/* AÇÕES */}
                    <div className="flex items-center gap-5">

                        <button
                            type="button"
                            aria-label="Adicionar"
                            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                            <Plus size={20} />
                        </button>

                        <button
                            type="button"
                            aria-label="Conta"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 transition-colors"
                        >
                            <CircleUserRound size={22} />
                        </button>

                    </div>

                </div>

            </header>

            {/* ================= CONTEÚDO ================= */}
            <div className="max-w-[1500px] mx-auto flex min-h-[calc(100vh-80px)]">

                {/* ================= PERFIL ================= */}
                <aside className="w-[330px] shrink-0 border-r border-slate-800 px-7 py-8">

                    <h1 className="text-xl font-medium text-slate-100 mb-6">
                        Perfil
                    </h1>

                    {/* CARD DO PERFIL */}
                    <div className="rounded-xl bg-[#111827]/60 border border-slate-800 p-4">

                        {/* ================= FOTO DE PERFIL ================= */}
                        <div className="relative w-full aspect-square max-h-[260px] rounded-lg overflow-hidden bg-[#0d1422] border border-slate-800 mb-4">

                            {/* IMAGEM */}
                            {profileImage ? (
                                <img
                                    src={profileImage}
                                    alt="Foto de perfil"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <UserRound
                                        size={52}
                                        strokeWidth={1.5}
                                        className="text-slate-600"
                                    />
                                </div>
                            )}

                            {/* BOTÃO DE EDITAR FOTO */}
                            <button
                                type="button"
                                onClick={() =>
                                    fileInputRef.current?.click()
                                }
                                aria-label="Alterar foto de perfil"
                                className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg hover:bg-sky-400 transition-colors"
                            >
                                <Pencil size={16} />
                            </button>

                            {/* INPUT DE ARQUIVO ESCONDIDO */}
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleProfileImage}
                                className="hidden"
                            />

                        </div>

                        {/* ================= NOME ================= */}
                        <div className="flex items-center gap-2 px-1">

                            {editingName ? (
                                <input
                                    autoFocus
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                    onBlur={() =>
                                        setEditingName(false)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            setEditingName(false);
                                        }
                                    }}
                                    className="w-full bg-transparent border-b border-slate-600 pb-1 text-sm text-slate-100 focus:outline-none focus:border-sky-400"
                                />
                            ) : (
                                <span className="text-sm font-medium text-slate-200 truncate">
                                    {name}
                                </span>
                            )}

                            {/* EDITAR NOME */}
                            <button
                                type="button"
                                aria-label="Editar nome"
                                onClick={() =>
                                    setEditingName(true)
                                }
                                className="shrink-0 text-slate-500 hover:text-sky-400 transition-colors"
                            >
                                <Pencil size={13} />
                            </button>

                        </div>

                    </div>

                    {/* ================= PLAYLISTS ================= */}
                    <div className="mt-8">

                        <div className="flex items-center justify-between mb-3">

                            <h2 className="text-sm font-medium text-slate-200">
                                Playlists
                            </h2>

                            <span className="text-xs text-slate-600">
                                {PLAYLIST_COUNT}
                            </span>

                        </div>

                        <div className="grid grid-cols-3 gap-3">

                            {Array.from({
                                length: PLAYLIST_COUNT,
                            }).map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    className="aspect-square rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-colors"
                                    aria-label={`Playlist ${i + 1}`}
                                />
                            ))}

                        </div>

                    </div>

                    {/* ================= CONFIGURAÇÕES ================= */}
                    <button
                        type="button"
                        aria-label="Configurações"
                        className="mt-8 flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors"
                    >
                        <Settings size={17} />
                        <span>Configurações</span>
                    </button>

                </aside>

                {/* ================= AVALIAÇÕES ================= */}
                <main className="flex-1 px-10 py-8 min-w-0">

                    <div className="max-w-[900px]">

                        <div className="mb-7">

                            <h1 className="text-xl font-medium text-slate-100">
                                Últimas Avaliações
                            </h1>

                            <p className="text-xs text-slate-500 mt-1">
                                Veja suas avaliações e comentários recentes.
                            </p>

                        </div>

                        <div className="flex flex-col gap-4">

                            {REVIEWS.map((review) => (
                                <ReviewCard
                                    key={review.id}
                                    review={review}
                                />
                            ))}

                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
}        