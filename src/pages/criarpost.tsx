import PageLayout from "../components/pageLayout";
import PageContent from "../components/pageContent";
import SearchBar from "../components/searchbar";
import OuvirCard from "../components/ouvirCard";

import {
  MagnifyingGlassIcon,
  PlusIcon,
} from "@phosphor-icons/react";

import MusicCard from "../components/musicCard";
import { StarIcon } from "lucide-react";

export default function CriarPost() {
  return (
    <PageLayout>
      <PageContent>
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_340px]">
          <main className="min-w-0">
              <SearchBar />

            {/* Titulo */}
            <h1 className="text-white font-serif text-[26px] mt-5">
              Criar post
            </h1>

            {/* musicas recomendadas */}

            <section className="mt-5">
              <h2 className="text-white font-serif text-[18px] mb-2">
                Músicas recomendadas
              </h2>

              <div className="grid grid-cols-4 gap-2">
                <MusicCard tipo="quadrado" titulo="aa" artista="aa" />
                <MusicCard tipo="quadrado" titulo="aa" artista="aa" />
                <MusicCard tipo="quadrado" titulo="aa" artista="aa" />
                <MusicCard tipo="quadrado" titulo="aa" artista="aa" />
              </div>
            </section>

            {/* escolher musica */}
            <section className="mt-5">
              <h2 className="text-white font-serif text-[18px] mb-2">
                Escolha uma música
              </h2>

              {/* Busca */}

              <div
                className="
                  h-[40px]
                  w-full
                  rounded-lg
                  bg-[#111722]
                  border
                  border-[#273349]
                  flex
                  items-center
                  px-3
                  gap-2
                  focus-within:border-[#5ba4e8]
                  transition
                "
              >
                <MagnifyingGlassIcon size={18} className="text-[#66748b]" />

                <input
                  type="text"
                  placeholder="Buscar música ou artista..."
                  className="
                    bg-transparent
                    outline-none
                    w-full
                    text-white
                    text-[12px]
                    placeholder:text-[#697386]
                  "
                />
              </div>
            </section>

            <OuvirCard />
          </main>

          {/* direita */}

          <aside className="xl:block">
            <div className="sticky top-40">
              <h2 className="mb-2 font-serif text-[18px] text-white">
                Sua nota
              </h2>

              {/* AVALIAÇÃO */}
              <div className="flex items-center gap-2 justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} size={30} className="text-[#52627c]" />
                  ))}
                </div>

                <span className="text-[#52627c] text-[24px]">0.0</span>
              </div>

              {/* Escrever */}
              <h2 className="mt-4 mb-2 font-serif text-[18px] text-white">
                Escreva sobre essa música
              </h2>

              <textarea
                placeholder="Escreva algo sobre a música..."
                className="
                  w-full
                  h-[115px]
                  resize-none
                  rounded-lg
                  bg-[#0c1017]
                  border
                  border-[#273349]
                  p-3
                  outline-none
                  text-white
                  text-[11px]
                  placeholder:text-[#697386]
                  focus:border-[#5ba4e8]
                  transition
                "
              />

              {/* Preview */}
              <h2 className="mt-4 mb-2 font-serif text-[18px] text-white">
                Publicar
              </h2>

              <div
                className="
                  rounded-lg
                  bg-[#0c1017]
                  border
                  border-[#273349]
                  p-3
                "
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#d9d9d9]" />

                  <div>
                    <p className="text-white text-[12px]">Você</p>

                    <p className="text-[#697386] text-[10px]">Novo post</p>
                  </div>
                </div>

                <p className="text-[#b5bbc5] text-[12px] leading-4 mt-4">
                  Sua publicação aparecerá aqui.
                </p>
              </div>

              {/* BOTÃO */}

              <button
                className="
                  mt-4
                  w-full
                  h-12
                  rounded-lg
                  bg-[#5ba4e8]
                  hover:bg-[#6bb0ef]
                  transition
                  text-white
                  text-[14px]
                  font-serif
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  cursor-pointer
                "
              >
                <PlusIcon size={14} weight="bold" />
                Adicionar Post
              </button>
            </div>
          </aside>
        </div>
      </PageContent>
    </PageLayout>
  );
}
