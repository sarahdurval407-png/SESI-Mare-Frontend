import PageLayout from "../components/pageLayout";
import PageContent from "../components/pageContent";
import SearchBar from "../components/searchbar";
import PostCard from "../components/postCard";
import RecommendedMusic from "../components/recommendedMusic";
import FeedTabs from "../components/feedTabs";

export default function Home() {
  return (
    <PageLayout>
      <PageContent>

        {/* COLUNAS */}
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_340px]">

          {/* COLUNA PRINCIPAL */}
          <section className="min-w-0">

            {/* ÁREA FIXA */}
            <div className="sticky top-0 z-20 bg-[#080A10]">

              {/* BUSCA */}
              <div className="pt-6">
                <SearchBar />
              </div>

              {/* FEED TABS */}
              <div className="flex justify-center pb-2 pt-4">
                <FeedTabs />
              </div>

            </div>

            {/* POSTS */}
            <div className="flex flex-col gap-6 pt-4">

              <PostCard
                name="Jurema"
                username="Jurema0321"
                time="2 minutos"
                content="Essa música me transporta para outro universo toda vez que escuto."
                musicTitle="Marejada"
                artist="Orquestra do Atlântico"
                likes={18}
                comments={9}
              />

              <PostCard
                name="Carlos F"
                username="Carlinhos"
                time="12 minutos"
                content="Alguém mais acionou para o lançamento do novo álbum na próxima semana?"
                musicTitle="Horizonte Sombrio"
                artist="Lumina Noir"
                likes={22}
                comments={14}
              />

              <PostCard
                name="Sico"
                username="PorquinhoMatado"
                time="27 minutos"
                content="Simplesmente impecável."
                musicTitle="Retro Frequência"
                artist="Vapor Wave"
                likes={24}
                comments={11}
              />

            </div>

          </section>

          {/* RECOMENDAÇÕES */}
          <aside className="hidden xl:block">

            <div className="sticky top-40">

              <h2 className="mb-5 font-serif text-[16px] text-white">
                Músicas recomendadas
              </h2>

              <div className="flex flex-col gap-3">

                <RecommendedMusic
                  title="Lembrança"
                  artist="Ayla"
                />

                <RecommendedMusic
                  title="Super Power Girl"
                  artist="Kira"
                />

              </div>

            </div>

          </aside>

        </div>

      </PageContent>
    </PageLayout>
  );
}