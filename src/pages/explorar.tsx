import PageLayout from "../components/pageLayout";
import PageContent from "../components/pageContent";
import SearchBar from "../components/searchbar";
import MusicCard from "../components/musicCard";

import { TrendUpIcon, StarIcon, SparkleIcon } from "@phosphor-icons/react";

export default function Explorar() {
  return (
    <PageLayout>
      <PageContent>

        
        {/* BUSCA */}
        <div className="sticky top-0 z-20 bg-[#080A10]">
          <div className="w-full max-w-[800px] pt-6 pb-6">
            <SearchBar />
          </div>
        </div>

        {/* TÍTULO */}
        <div className="mb-10">
          <h1 className="font-serif text-[26px] text-gray-100">Explorar</h1>

          <p className="mt-1 font-serif text-[13px] text-[#697386]">
            Descubra novas músicas, artistas e posts.
          </p>
        </div>

        {/* =========================
            EM ALTA
        ========================== */}

        <section className="mb-12">
          <div className="mb-5 flex items-center gap-2">
            <TrendUpIcon size={18} className="text-[#58a9e8]" />

            <h2 className="font-serif text-[17px] text-white">Em alta</h2>
          </div>

          {/* CARROSSEL */}
          <div className="flex gap-4 overflow-x-auto pb-3">
            <div className="w-[420px] shrink-0">
              <MusicCard
                tipo="banner"
                titulo="Marejada"
                artista="Orquestra do Atlântico"
                nota={4.8}
                avaliacoes="124 avaliações"
              />
            </div>

            <div className="w-[420px] shrink-0">
              <MusicCard
                tipo="banner"
                titulo="Horizonte Sombrio"
                artista="Lumina Noir"
                nota={4.7}
                avaliacoes="98 avaliações"
              />
            </div>

            <div className="w-[420px] shrink-0">
              <MusicCard
                tipo="banner"
                titulo="Retro Frequência"
                artista="Vapor Wave"
                nota={4.6}
                avaliacoes="87 avaliações"
              />
            </div>
          </div>
        </section>

        {/* =========================
            MAIS BEM AVALIADAS
        ========================== */}

        <section className="mb-12">
          <div className="mb-5 flex items-center gap-2">
            <StarIcon size={18} className="text-[#58a9e8]" />

            <h2 className="font-serif text-[17px] text-white">
              Mais bem avaliadas
            </h2>
          </div>

          {/* CARROSSEL */}
          <div className="flex gap-4 overflow-x-auto pb-3">
            <div className="w-[190px] shrink-0">
              <MusicCard
                tipo="quadrado"
                titulo="Marejada"
                artista="Orquestra do Atlântico"
                nota={5}
                avaliacoes="328 avaliações"
              />
            </div>

            <div className="w-[190px] shrink-0">
              <MusicCard
                tipo="quadrado"
                titulo="Lembrança"
                artista="Ayla"
                nota={4.9}
                avaliacoes="245 avaliações"
              />
            </div>

            <div className="w-[190px] shrink-0">
              <MusicCard
                tipo="quadrado"
                titulo="Super Power Girl"
                artista="Kira"
                nota={4.8}
                avaliacoes="198 avaliações"
              />
            </div>

            <div className="w-[190px] shrink-0">
              <MusicCard
                tipo="quadrado"
                titulo="Horizonte Sombrio"
                artista="Lumina Noir"
                nota={4.7}
                avaliacoes="176 avaliações"
              />
            </div>

            <div className="w-[190px] shrink-0">
              <MusicCard
                tipo="quadrado"
                titulo="Retro Frequência"
                artista="Vapor Wave"
                nota={4.6}
                avaliacoes="154 avaliações"
              />
            </div>
          </div>
        </section>

        {/* =========================
            RECOMENDADAS
        ========================== */}

        <section className="mb-12">
          <div className="mb-5 flex items-center gap-2">
            <SparkleIcon size={18} className="text-[#58a9e8]" />

            <h2 className="font-serif text-[17px] text-white">
              Recomendadas para você
            </h2>
          </div>

          {/* CARROSSEL */}
          <div className="flex gap-4 overflow-x-auto pb-3">
            <div className="w-[190px] shrink-0">
              <MusicCard
                tipo="quadrado"
                titulo="Lembrança"
                artista="Ayla"
                nota={4.7}
                avaliacoes="96 avaliações"
              />
            </div>

            <div className="w-[190px] shrink-0">
              <MusicCard
                tipo="quadrado"
                titulo="Super Power Girl"
                artista="Kira"
                nota={4.6}
                avaliacoes="82 avaliações"
              />
            </div>

            <div className="w-[190px] shrink-0">
              <MusicCard
                tipo="quadrado"
                titulo="Retro Frequência"
                artista="Vapor Wave"
                nota={4.6}
                avaliacoes="74 avaliações"
              />
            </div>

            <div className="w-[190px] shrink-0">
              <MusicCard
                tipo="quadrado"
                titulo="Marejada"
                artista="Orquestra do Atlântico"
                nota={4.5}
                avaliacoes="63 avaliações"
              />
            </div>
          </div>
        </section>
      </PageContent>
    </PageLayout>
  );
}
