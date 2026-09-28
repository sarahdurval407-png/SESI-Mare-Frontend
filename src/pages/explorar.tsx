import SearchBar from "../components/searchbar";
import Sidebar from "../components/sidebar";
import MusicCard from "../components/musicCard";

import { TrendUpIcon, StarIcon, SparkleIcon } from "@phosphor-icons/react";

export default function Explorar() {
  return (
    <div className="min-h-screen bg-[#080A10] overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo central */}
      <main className="min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Barra de pesquisa */}
        <header className="h-20 flex items-center justify-center">
          <SearchBar />
        </header>

        {/* Conteúdo */}
        <div className="relative">
          {/* CONTEÚDO DA EXPLORAÇÃO */}
          <section className="w-full max-w-[1000px] mx-auto">
            {/* Título */}
            <div className="mb-8">
              <h1 className="text-2xl text-white">Explorar</h1>

              <p className="text-sm text-[#697386] mt-1">
                Descubra novas músicas, artistas e posts.
              </p>
            </div>

            {/* =========================
                EM ALTA
            ========================= */}

            <section className="mb-10">
              <div className="flex items-center gap-2 mb-5">
                <TrendUpIcon size={18} className="text-[#58a9e8]" />

                <h2 className="text-lg text-white">Em alta</h2>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2">
                <MusicCard
                  tipo="banner"
                  titulo="Nome da música"
                  artista="Nome do artista"
                  nota={4.8}
                  avaliacoes="124 avaliações"
                />
              </div>
            </section>

            {/* =========================
                MAIS BEM AVALIADAS
            ========================= */}

            <section className="mb-10">
              <div className="flex items-center gap-2 mb-5">
                <StarIcon size={18} className="text-[#58a9e8]" />

                <h2 className="text-lg text-white">Mais bem avaliadas</h2>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2">
                <MusicCard
                  tipo="quadrado"
                  titulo="Nome da música"
                  artista="Nome do artista"
                  nota={5}
                  avaliacoes="328 avaliações"
                />
              </div>
            </section>

            {/* =========================
                RECOMENDADAS
            ========================= */}

            <section className="mb-10">
              <div className="flex items-center gap-2 mb-5">
                <SparkleIcon size={18} className="text-[#58a9e8]" />

                <h2 className="text-lg text-white">Recomendadas para você</h2>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2">
                <MusicCard
                  tipo="quadrado"
                  titulo="Nome da música"
                  artista="Nome do artista"
                  nota={4.7}
                  avaliacoes="96 avaliações"
                />
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}
