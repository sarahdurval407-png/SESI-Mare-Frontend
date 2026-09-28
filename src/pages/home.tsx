import SearchBar from "../components/searchbar"
import PostCard from "../components/postCard"
import RecommendedMusic from "../components/recommendedMusic"
import Sidebar from "../components/sidebar"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080A10]">

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

          {/* POSTS */}
          <section className="w-full max-w-[600px] mx-auto">

            {/* Tabs */}
            <div className="flex items-center justify-center gap-10 mb-5 px-2">
              <button className="text-lg text-white border-b-2 border-[#58a9e8] pb-2">
                Para você
              </button>

              <button className="text-lg text-[#697386] pb-2">
                Seguindo
              </button>
            </div>

            {/* Posts */}
            <div className="flex flex-col gap-6 py-4">

              <PostCard
                username="Jurema"
                time="2 minutos"
                content="Essa música me transporta para outro universo toda vez que escuto. O trabalho de arranjo nos metais aqui é simplesmente fantástico!"
                musicTitle="Marejada"
                artist="Orquestra do Atlântico"
                likes={18}
                comments={9}
              />

              <PostCard
                username="Carlos_F"
                time="12 minutos"
                content="Alguém mais acionou para o lançamento do novo álbum na próxima semana? Os singles lançados até agora mostram uma maturidade sonora incrível."
                musicTitle="Horizonte Sombrio"
                artist="Lumina Noir"
                likes={22}
                comments={14}
              />

              <PostCard
                username="Ana_Musica"
                time="27 minutos"
                content="Simplesmente impecável. A produção vocal e a dinâmica de sintetizadores analógicos criam uma atmosfera sensacional."
                musicTitle="Retro Frequência"
                artist="Vapor Wave"
                likes={24}
                comments={11}
              />

            </div>
          </section>


          {/* RECOMENDAÇÕES */}
          <aside
            className="
        hidden
        lg:block
        absolute
        top-0
        left-[calc(50%+330px)]
        w-[280px]
        xl:w-[340px]
      "
          >

            <h2 className="text-lg text-white mb-5">
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

          </aside>

        </div>
      </main>
    </div>
  )
}