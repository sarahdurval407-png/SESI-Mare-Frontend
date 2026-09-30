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

export default function Configuracoes() {
  return (
    <PageLayout>
      <PageContent>

        {/* COLUNAS — MESMO PADRÃO DA HOME */}
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_340px]">

          {/* COLUNA PRINCIPAL */}
          <section className="min-w-0">

            {/* ÁREA FIXA */}
            <div className="sticky top-0 z-20 bg-[#080A10]">

              {/* BUSCA */}
              <div className="pt-6">
                <SearchBar />
              </div>

            </div>

            {/* CONFIGURAÇÕES */}
            <div className="pt-5 max-w-[620px]">

              <h1 className="font-serif text-[20px] text-white mb-5">
                Configurações
              </h1>

              {/* ================= PREFERÊNCIAS ================= */}
              <section className="mb-7">

                <h2 className="font-serif text-[14px] text-white mb-3">
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
                    "
                  >
                    <Contrast
                      size={16}
                      className="text-[#8992A5]"
                    />

                    <span className="flex-1 text-[12px] text-[#B8BECC]">
                      Aparência
                    </span>

                    <span className="flex items-center gap-1 text-[11px] text-[#737C8E]">
                      Sistema
                      <ChevronRight size={13} />
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
                    "
                  >
                    <Bell
                      size={16}
                      className="text-[#8992A5]"
                    />

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
                    "
                  >
                    <SlidersHorizontal
                      size={16}
                      className="text-[#8992A5]"
                    />

                    <span className="text-[12px] text-[#B8BECC]">
                      Preferências musicais
                    </span>
                  </button>

                </div>

              </section>

              {/* ================= SOBRE ================= */}
              <section className="mb-7">

                <h2 className="font-serif text-[14px] text-white mb-3">
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
                    "
                  >
                    <ShieldCheck
                      size={16}
                      className="text-[#8992A5]"
                    />

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
                    "
                  >
                    <ScrollText
                      size={16}
                      className="text-[#8992A5]"
                    />

                    <span className="text-[12px] text-[#B8BECC]">
                      Privacidade
                    </span>
                  </button>

                </div>

              </section>

              {/* ================= SAIR ================= */}
              <section>

                <h2 className="font-serif text-[14px] text-white mb-3">
                  Sair
                </h2>

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
                  "
                >
                  <LogOut
                    size={16}
                    className="text-[#C94B55]"
                  />

                  <span className="text-[12px] text-[#C94B55]">
                    Sair da conta
                  </span>
                </button>

              </section>

            </div>

          </section>

          {/* COLUNA DA DIREITA
              MESMA COLUNA DA HOME */}
          <aside className="hidden xl:block">

            <div className="sticky top-40">

              <h2 className="mb-5 font-serif text-[16px] text-white">
                Sua conta
              </h2>

              <div
                className="
                  rounded-md
                  bg-[#10151F]
                  border
                  border-[#252D38]
                  p-5
                "
              >
                <p className="text-[13px] text-white mb-2">
                  Gerencie suas preferências
                </p>

                <p className="text-[11px] leading-5 text-[#8992A5]">
                  Altere configurações da sua conta,
                  notificações e preferências musicais.
                </p>
              </div>

            </div>

          </aside>

        </div>

      </PageContent>
    </PageLayout>
  );
}