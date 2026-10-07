import PageLayout from "../components/pageLayout";
import PageContent from "../components/pageContent";
import SearchBar from "../components/searchbar";
import MusicCard from "../components/musicCard";
import RecommendedMusic from "../components/recommendedMusic";

export default function Salvos() {
  return (
    <PageLayout>
      <PageContent>
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="flex flex-col">
            {/* BUSCA */}
            <div className="sticky top-0 z-20 bg-[#080A10]">
              <div className="w-full pb-6">
                <SearchBar />
              </div>
            </div>

            {/* TÍTULO */}
            <div className="mb-6">
              <h1 className="font-serif text-[26px] text-gray-100">
                Músicas salvas
              </h1>

              <p className="mt-1 font-serif text-[13px] text-[#697386]">
                Músicas que você não quer deixar passar.
              </p>
            </div>

            <section className="flex flex-col gap-4">
              {/* Musicas */}
              <MusicCard
                tipo="post"
                titulo="Marejada"
                artista="Orquestra do Atlântico"
                nota={4.8}
                avaliacoes="124 avaliações"
              />

              <MusicCard
                tipo="post"
                titulo="Lembrança"
                artista="Ayla"
                nota={4.9}
                avaliacoes="245 avaliações"
              />

              <MusicCard
                tipo="post"
                titulo="Super Power Girl"
                artista="Kira"
                nota={4.8}
                avaliacoes="198 avaliações"
              />

              <MusicCard
                tipo="post"
                titulo="Retro Frequência"
                artista="Vapor Wave"
                nota={4.6}
                avaliacoes="154 avaliações"
              />
            </section>
          </div>
          {/* RECOMENDAÇÕES */}
          <aside className="hidden xl:block">
            <div className="sticky top-40">
              <h2 className="mb-5 font-serif text-[16px] text-white">
                Músicas recomendadas
              </h2>

              <div className="flex flex-col gap-3">
                <RecommendedMusic titulo="Lembrança" artist="Ayla" />

                <RecommendedMusic titulo="Super Power Girl" artist="Kira" />
              </div>
            </div>
          </aside>
        </div>
      </PageContent>
    </PageLayout>
  );
}
