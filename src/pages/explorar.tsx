import { useEffect, useState } from "react";

import PageLayout from "../components/pageLayout";
import PageContent from "../components/pageContent";
import SearchBar from "../components/searchbar";
import MusicCard from "../components/musicCard";

import { TrendUpIcon, StarIcon, SparkleIcon } from "@phosphor-icons/react";

export default function Explorar() {
  const [musicas, setMusicas] = useState<any[]>([]);

  useEffect(() => {
    async function buscarMusicas() {
      try {
        const resposta = await fetch("http://localhost:3000/musicas");

        if (!resposta.ok) {
          throw new Error("Erro ao buscar músicas");
        }

        const dados = await resposta.json();

        setMusicas(dados);
      } catch (erro) {
        console.error("Erro ao buscar músicas:", erro);
      }
    }

    buscarMusicas();
  }, []);

  // Em alta
  const musicasEmAlta = musicas.slice(0, 16);

  // Mais bem avaliadas
  const musicasMaisBemAvaliadas = [...musicas]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 16);

  // Recomendadas
  const musicasRecomendadas = musicas.slice(0, 16);

  return (
    <PageLayout>
      <PageContent>
        {/* BUSCA */}
        <div className="sticky top-0 z-20 bg-[#080A10]">
          <div className="w-[65%] pb-6">
            <SearchBar />
          </div>
        </div>

        {/* TÍTULO */}
        <div className="mb-10">
          <h1 className="font-serif text-[26px] text-gray-100">
            Explorar
          </h1>

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

            <h2 className="font-serif text-[17px] text-white">
              Em alta
            </h2>
          </div>

          <div className="flex gap-4 overflow-x-hidden pb-3">
            {musicasEmAlta.map((musica) => (
              <MusicCard
                key={musica.id}
                tipo="banner"
                titulo={musica.titulo}
                artista={musica.artista.nome}
                capa={musica.capa}
                nota={musica.nota}
                avaliacoes={musica.avaliacoes}
                duracaoSegundos={musica.duracaoSegundos}
              />
            ))}
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

          <div className="flex gap-4 overflow-x-auto pb-3">
            {musicasMaisBemAvaliadas.map((musica) => (
              <MusicCard
                key={musica.id}
                tipo="quadrado"
                titulo={musica.titulo}
                artista={musica.artista.nome}
                capa={musica.capa}
                nota={musica.nota}
                avaliacoes={musica.avaliacoes}
                duracaoSegundos={musica.duracaoSegundos}
              />
            ))}
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

          <div className="flex gap-4 overflow-x-auto pb-3">
            {musicasRecomendadas.map((musica) => (
              <MusicCard
                key={musica.id}
                tipo="quadrado"
                titulo={musica.titulo}
                artista={musica.artista.nome}
                capa={musica.capa}
                nota={musica.nota}
                avaliacoes={musica.avaliacoes}
                duracaoSegundos={musica.duracaoSegundos}
              />
            ))}
          </div>
        </section>
      </PageContent>
    </PageLayout>
  );
}