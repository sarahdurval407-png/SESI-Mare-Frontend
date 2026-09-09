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
    type LucideIcon,
} from "lucide-react";

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

const TOTAL_STEPS = 3;
const CURRENT_STEP = 1;

export default function VibeSelectionPage() {
    const [selected, setSelected] = useState<Set<string>>(
        new Set(["pop", "hip-hop", "pagode", "mpb"])
    );

    function toggleGenre(id: string) {
        setSelected((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    }

    const progressPercent = (CURRENT_STEP / TOTAL_STEPS) * 100;

    return (
        <div className="min-h-screen w-full bg-[#0a0e1a] text-white flex items-center justify-center px-6 py-16">
            <div className="w-full max-w-4xl">
                {/* Cabeçalho */}
                <header className="flex flex-col items-center text-center gap-3 mb-14">
                    <div className="flex items-center gap-2 text-3xl font-bold tracking-tight text-sky-400">
                        {/* Logo no lugar do texto */}
                        <img
                            src={logo}
                            alt="Maré"
                            className="w-[200px] h-auto object-contain"
                        />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-semibold text-white">
                        Qual a sua vibe?
                    </h1>
                    <p className="text-sm md:text-base text-slate-400 max-w-md">
                        Escolha seus estilos favoritos para personalizar seu feed de descobertas.
                    </p>
                </header>

                {/* Grade de gêneros */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
                    {GENRES.map(({ id, label, icon: Icon }) => {
                        const isSelected = selected.has(id);
                        return (
                            <button
                                key={id}
                                type="button"
                                onClick={() => toggleGenre(id)}
                                aria-pressed={isSelected}
                                className={`relative flex flex-col justify-between rounded-xl border p-4 h-28 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${isSelected
                                    ? "bg-sky-950/60 border-sky-400"
                                    : "bg-slate-900/60 border-slate-800 hover:border-slate-600"
                                    }`}
                            >
                                <span
                                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${isSelected
                                        ? "bg-sky-500/20 text-sky-400"
                                        : "bg-slate-800 text-slate-300"
                                        }`}
                                >
                                    <Icon size={16} />
                                </span>

                                <span className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-slate-100">
                                        {label}
                                    </span>
                                    {isSelected && (
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-sky-400 text-[#0a0e1a]">
                                            <svg
                                                viewBox="0 0 12 12"
                                                width={9}
                                                height={9}
                                                fill="none"
                                            >
                                                <path
                                                    d="M2 6.2 4.8 9 10 3"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                    )}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Rodapé: progresso + avançar */}
                <footer className="flex items-center justify-between">
                    <div className="flex flex-col gap-2 w-40">
                        <span className="text-xs text-slate-400">
                            Passo {CURRENT_STEP} de {TOTAL_STEPS}
                        </span>
                        <div className="h-1 w-full rounded-full bg-slate-800 overflow-hidden">
                            <div
                                className="h-full rounded-full bg-sky-400 transition-all"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                    </div>

                    <button
                        type="button"
                        disabled={selected.size === 0}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white transition-colors hover:bg-sky-400 disabled:opacity-40 disabled:hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                        aria-label="Avançar para o próximo passo"
                    >
                        <ArrowRight size={20} />
                    </button>
                </footer>
            </div>
        </div>
    );
}
