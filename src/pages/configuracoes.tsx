import {
  Contrast,
  Bell,
  SlidersHorizontal,
  ShieldCheck,
  ScrollText,
  LogOut,
  ChevronRight,
} from "lucide-react";

import PageLayout from "../components/pageLayout";
import PageContent from "../components/pageContent";
import SearchBar from "../components/searchbar";
import RecommendedMusic from "../components/recommendedMusic";

export default function Configuracoes() {
  return (
    <PageLayout>
      <PageContent>
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_340px]">
          <section className="min-w-0">
            <div className="sticky top-0 z-20 bg-[#080A10]">

              <SearchBar />

            </div>

            {/* CONFIGURAÇÕES */}
            <div className="pt-5 w-full">
              <div className="mb-6">
                <h1 className="font-serif text-[26px] text-white">
                  Configurações
                </h1>

                <p className="mt-1 font-serif text-[13px] text-[#697386]">
                  Gerencie suas preferências
                </p>
              </div>

              {/* ================= PREFERÊNCIAS ================= */}
              <section className="mb-7">
                <h2 className="font-serif text-[18px] text-white mb-3">
                  Preferências
                </h2>

                <div className="flex flex-col gap-2">
                  {/* Aparência */}
                  <button
                    className="
                      w-full
                      min-h-[42px]
                      px-4
                      flex
                      items-center
                      gap-3
                      rounded-md
                      bg-[#10151F]
                      border
                      border-[#252D38]
                      hover:border-[#3A73C4]
                      transition
                      text-left
                      cursor-pointer
                    "
                  >
                    <Contrast size={16} className="text-[#8992A5]" />

                    <span className="flex-1 text-[12px] text-[#B8BECC]">
                      Aparência
                    </span>

                    <span className="flex items-center gap-1 text-[11px] text-[#737C8E]">
                      Sistema
                      <ChevronRight size={14} />
                    </span>
                  </button>

                  {/* Notificações */}
                  <button
                    className="
                      w-full
                      min-h-[42px]
                      px-4
                      flex
                      items-center
                      gap-3
                      rounded-md
                      bg-[#10151F]
                      border
                      border-[#252D38]
                      hover:border-[#3A73C4]
                      transition
                      text-left
                      cursor-pointer
                    "
                  >
                    <Bell size={16} className="text-[#8992A5]" />

                    <span className="text-[12px] text-[#B8BECC]">
                      Notificações
                    </span>
                  </button>

                  {/* Preferências musicais */}
                  <button
                    className="
                      w-full
                      min-h-[42px]
                      px-4
                      flex
                      items-center
                      gap-3
                      rounded-md
                      bg-[#10151F]
                      border
                      border-[#252D38]
                      hover:border-[#3A73C4]
                      transition
                      text-left
                      cursor-pointer
                    "
                  >
                    <SlidersHorizontal size={16} className="text-[#8992A5]" />

                    <span className="text-[12px] text-[#B8BECC]">
                      Preferências musicais
                    </span>
                  </button>
                </div>
              </section>

              {/* ================= SOBRE ================= */}
              <section className="mb-7">
                <h2 className="font-serif text-[18px] text-white mb-3">
                  Sobre
                </h2>

                <div className="flex flex-col gap-2">
                  {/* Termos */}
                  <button
                    className="
                      w-full
                      min-h-[42px]
                      px-4
                      flex
                      items-center
                      gap-3
                      rounded-md
                      bg-[#10151F]
                      border
                      border-[#252D38]
                      hover:border-[#3A73C4]
                      transition
                      text-left
                      cursor-pointer
                    "
                  >
                    <ShieldCheck size={16} className="text-[#8992A5]" />

                    <span className="text-[12px] text-[#B8BECC]">
                      Termos de uso
                    </span>
                  </button>

                  {/* Privacidade */}
                  <button
                    className="
                      w-full
                      min-h-[42px]
                      px-4
                      flex
                      items-center
                      gap-3
                      rounded-md
                      bg-[#10151F]
                      border
                      border-[#252D38]
                      hover:border-[#3A73C4]
                      transition
                      text-left
                      cursor-pointer
                    "
                  >
                    <ScrollText size={16} className="text-[#8992A5]" />

                    <span className="text-[12px] text-[#B8BECC]">
                      Privacidade
                    </span>
                  </button>
                </div>
              </section>

              {/* ================= SAIR ================= */}
              <section>
                <h2 className="font-serif text-[18px] text-white mb-3">Sair</h2>

                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/";
                  }}
                  className="
                    w-full
                    min-h-[42px]
                    px-4
                    flex
                    items-center
                    gap-3
                    rounded-md
                    bg-[#160D12]
                    border
                    border-[#6B2632]
                    hover:border-[#E5484D]
                    transition
                    text-left
                    cursor-pointer
                  "
                >
                  <LogOut size={16} className="text-[#C94B55]" />

                  <span className="text-[12px] text-[#C94B55]">
                    Sair da conta
                  </span>
                </button>
              </section>
            </div>
          </section>

          {/* COLUNA DA DIREITA*/}
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
