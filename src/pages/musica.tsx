import PageLayout from "../components/pageLayout";
import PageContent from "../components/pageContent";
import SearchBar from "../components/searchbar";
import OuvirCard from "../components/ouvirCard";

import { StarIcon, PlusIcon } from "@phosphor-icons/react";

import PostCard from "../components/postCard";

export default function Musica() {
  return (
    <PageLayout>
      <PageContent>
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_340px]">
          <main className="min-w-0">
            <div className="sticky top-0 z-20 bg-[#080A10]">
                <SearchBar />
            </div>

            {/* Capa */}
            <div className="w-full h-[240px] rounded-xl bg-[#131824] mt-6 mb-3" />

            {/* Titulo */}
            <div className="flex items-center justify-between gap-5">
              <div>
                <h1 className="text-white font-serif text-[24px]">Música</h1>

                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#d9d9d9]" />

                  <span className="text-[#d0d0d0] text-[12px]">Artista</span>
                </div>
              </div>

              {/* AVALIAÇÃO */}
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      size={24}
                      weight="regular"
                      className="text-[#52627c]"
                    />
                  ))}
                </div>

                <span className="text-[#52627c] text-[24px]">0.0</span>
              </div>
            </div>

            <OuvirCard/>

            {/* musicas relacionadas */}
            <section className="mt-3">
              <h2 className="text-white font-serif text-[24px] mb-2">
                Músicas relacionadas
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-6 gap-2">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <button
                    key={item}
                    className="
                    w-[100px]
                    h-[100px]
                      rounded-lg
                      bg-[#18202d]
                      border border-[#202b3d]
                      hover:bg-[#202b3d]
                      transition
                      cursor-pointer
                    "
                  />
                ))}
              </div>
            </section>

            {/* criar post */}
            <button
              className="
                mt-12
                w-full
                h-14
                rounded-lg
                bg-[#5ba4e8]
                hover:bg-[#6bb0ef]
                transition
                text-white
                text-[18px]
                font-serif
                flex
                items-center
                justify-center
                gap-2
                cursor-pointer
              "
            >
              <PlusIcon weight="bold" size={18} />
              Adicionar um post
            </button>
          </main>

          {/* posts relacionados */}
          <aside className="hidden xl:block">
            <div className="sticky top-40">
              <h2 className="mb-5 font-serif text-[16px] text-white">
                Posts relacionados
              </h2>

              <div className="flex flex-col gap-3">
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
            </div>
          </aside>
        </div>
      </PageContent>
    </PageLayout>
  );
}
