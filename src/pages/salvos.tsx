import SearchBar from "../components/searchbar";
import Sidebar from "../components/sidebar";
import MusicCard from "../components/musicCard";

export default function Salvos() {
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
          <section className="w-full max-w-[1000px] mx-auto">
            {/* Título */}
            <div className="mb-8">
              <h1 className="text-2xl text-white">Salvos</h1>

              <p className="text-sm text-[#697386] mt-1">
                Músicas que você não quer deixar passar
              </p>
            </div>

            <div className="flex gap-4 overflow-x-auto">
              <MusicCard
                tipo="post"
                titulo="Nome da música"
                artista="Nome do artista"
                nota={4.8}
                avaliacoes="124 avaliações"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
