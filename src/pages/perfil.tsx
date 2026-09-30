import {
  CameraIcon,
  MusicNoteIcon,
  PencilSimpleIcon,
  ShareNetworkIcon,
  UserIcon,
} from "@phosphor-icons/react";

import PageLayout from "../components/pageLayout";
import PageContent from "../components/pageContent";
import SearchBar from "../components/searchbar";
import PostCard from "../components/postCard";
import RecommendedMusic from "../components/recommendedMusic";

export default function Perfil() {
  return (
    <PageLayout>
      <PageContent>
        {/* COLUNAS */}
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_340px]">
          {/* COLUNA PRINCIPAL */}
          <section className="min-w-0">
            {/* ÁREA FIXA */}
            <div className="sticky top-0 z-20 bg-[#080A10]">
              <div className="w-full max-w-[800px] pt-6 pb-6">
                <SearchBar />
              </div>
            </div>

            {/* TÍTULO */}
            <div className="mb-6">
              <h1 className="font-serif text-[26px] text-gray-100">
                Perfil
              </h1>

              <p className="mt-1 font-serif text-[13px] text-[#697386]">
                Suas músicas e publicações
              </p>
            </div>

            {/* PERFIL */}
            <section className="w-full overflow-hidden rounded-xl border border-[#252d38] bg-[#0d121c]">
              {/* CAPA */}
              <div className="relative h-[140px] bg-[#141a28]">
                <button
                  type="button"
                  className="absolute right-4 top-4 flex items-center gap-2 rounded-lg bg-[#111726]/80 px-3 py-2 font-serif text-[12px] text-gray-300 transition hover:text-blue-400"
                >
                  <CameraIcon size={18} />
                  Alterar capa
                </button>
              </div>

              {/* INFORMAÇÕES */}
              <div className="px-6 pb-6">
                <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                  {/* Avatar */}
                  <div className="flex items-end gap-4">
                    <div className="-mt-4 z-50 flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-full border-4 border-[#0d121c] bg-[#1a2130]">
                      <UserIcon size={34} className="text-gray-400" />
                    </div>

                    <div className="pb-1">
                      <div className="flex items-baseline">
                        <h2 className="font-serif text-[18px] text-gray-100">
                          Usuário
                        </h2>

                        <p className="ml-2 font-serif text-[16px] text-gray-500">
                          @usuario
                        </p>
                      </div>

                      <p className="mt-1 font-serif text-[12px] text-gray-500">
                        Minha bio na Maré
                      </p>
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-lg border border-[#252d38] px-4 py-2 font-serif text-[12px] text-gray-300 transition hover:border-blue-400 hover:text-blue-400"
                    >
                      <ShareNetworkIcon size={18} />
                      Compartilhar
                    </button>

                    <button
                      type="button"
                      className="flex items-center gap-2 rounded-lg bg-[#5ea3ee] px-4 py-2 font-serif text-[12px] text-white transition hover:bg-[#7ab4f2]"
                    >
                      <PencilSimpleIcon size={18} />
                      Editar perfil
                    </button>
                  </div>
                </div>

                {/* SEGUIDORES */}
                <div className="mt-5 flex gap-6 font-serif text-[14px] text-gray-400">
                  <span>
                    <strong className="text-gray-200" style={{ fontFamily: "inter, sans-serif" }}>70</strong> Seguidores
                  </span>

                  <span>
                    <strong className="text-gray-200" style={{ fontFamily: "inter, sans-serif" }}>87</strong> Seguindo
                  </span>
                </div>
              </div>
            </section>

            {/* Abas */}
            <div className="mt-8 border-b border-[#252d38]">
              <div className="flex gap-8">
                <button
                  type="button"
                  className="border-b-2 border-blue-400 px-1 pb-3 font-serif text-[14px] text-white"
                >
                  Últimas avaliações
                </button>

                <button
                  type="button"
                  className="border-b-2 border-transparent px-1 pb-3 font-serif text-[14px] text-gray-500 transition hover:text-blue-400"
                >
                  Comentários
                </button>

                <button
                  type="button"
                  className="border-b-2 border-transparent px-1 pb-3 font-serif text-[14px] text-gray-500 transition hover:text-blue-400"
                >
                  Músicas salvas
                </button>
              </div>
            </div>

            {/* Avaliações */}
            <div className="flex flex-col gap-6 pt-6">
              <div className="flex items-center gap-2">
                <MusicNoteIcon size={18} className="text-blue-400" />

                <h2 className="font-serif text-[16px] text-gray-100">
                  Últimas avaliações
                </h2>
              </div>

              <PostCard
                name="Jurema"
                username="Jurema0321"
                time="2 minutos"
                content="Essa música me transporta para outro universo toda vez que escuto. O trabalho de arranjo nos metais aqui é simplesmente fantástico!"
                musicTitle="Marejada"
                artist="Orquestra do Atlântico"
                likes={18}
                comments={9}
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
