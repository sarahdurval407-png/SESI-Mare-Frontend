import SearchBar from "../components/searchbar";
import Sidebar from "../components/sidebar";

export default function Explorar() {
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
        <div className="relative"></div>
      </main>
    </div>
  );
}
