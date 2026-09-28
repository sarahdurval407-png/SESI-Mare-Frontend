import {
  PlayIcon,
  BookmarkSimpleIcon,
  DotsThreeIcon,
  Star,
} from "@phosphor-icons/react";

type MusicCardProps = {
  tipo: "banner" | "quadrado" | "post";
  titulo?: string;
  artista?: string;
  nota?: number;
  avaliacoes?: string;
  duracao?: string;
};

export default function MusicCard({
  tipo,
  titulo = "Nome da música",
  artista = "Nome do artista",
  nota = 4.8,
  avaliacoes = "124 avaliações",
  duracao = "3:42",
}: MusicCardProps) {

  // =========================
  // CARD BANNER
  // =========================

  if (tipo === "banner") {
    return (
      <div className="w-[320px] h-[160px] shrink-0 rounded-lg overflow-hidden border border-[#354052] bg-[#111420]">

        <div className="relative w-full h-full">

          {/* Imagem */}
          <img
            src="../assets/logo.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Camada escura */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Conteúdo */}
          <div className="relative z-10 w-full h-full p-4 flex flex-col justify-between">

            {/* Play */}
            <div className="flex justify-end">

              <button className="w-10 h-10 rounded-full bg-[#58AAF0] flex items-center justify-center hover:bg-[#4a8bc2] transition cursor-pointer">

                <PlayIcon
                  size={18}
                  color="#FFFFFF"
                  fill="currentColor"
                />

              </button>

            </div>

            {/* Informações */}
            <div>

              <p className="text-white text-lg truncate">
                {titulo}
              </p>

              <p className="text-[#D0D0D5] text-xs mt-1 truncate">
                {artista}
              </p>

              <div className="flex items-center mt-2">

                <Star
                  size={13}
                  className="fill-[#58AAF0] text-[#58AAF0]"
                />

                <span className="text-white text-[11px] ml-1">
                  {nota}
                </span>

                <span className="text-[#D0D0D5] text-[11px] ml-1">
                  ({avaliacoes})
                </span>

                <span className="text-[#D0D0D5] text-[11px] ml-3">
                  {duracao}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }


  // =========================
  // CARD QUADRADO
  // =========================

  if (tipo === "quadrado") {
    return (
      <div className="w-[160px] shrink-0 border border-[#354052] rounded-lg p-2 bg-[#111420]">

        <img
          src="../assets/logo.png"
          alt={titulo}
          className="w-[120px] h-[120px] rounded-xl object-cover"
        />

        <p className="text-white text-xs mt-2 truncate">
          {titulo}
        </p>

        <p className="text-[#8B93A3] text-[11px] mt-1 truncate">
          {artista}
        </p>

        <div className="flex items-center mt-1">

          <Star
            size={12}
            className="fill-[#58AAF0] text-[#58AAF0]"
          />

          <span className="text-[#D0D0D5] text-[10px] ml-1">
            {nota}
          </span>

        </div>

      </div>
    );
  }


  // =========================
  // CARD POST / SALVO
  // =========================

  return (
    <div className="bg-[#111420] border border-[#354052] rounded-lg p-3 w-full">

      {/* Parte principal */}
      <div className="flex items-center w-full">

        {/* Capa */}
        <img
          src="/logo.png"
          alt={titulo}
          className="w-16 h-16 rounded-xl object-cover shrink-0"
        />

        {/* Informações */}
        <div className="flex-1 min-w-0 ml-3">

          <p className="text-white text-sm truncate">
            {titulo}
          </p>

          <p className="text-[#8B93A3] text-xs mt-1 truncate">
            {artista}
          </p>

          <div className="flex items-center mt-2">

            <Star
              size={13}
              className="fill-[#58AAF0] text-[#58AAF0]"
            />

            <span className="text-[#D0D0D5] text-[11px] ml-1">
              {nota}
            </span>

            <span className="text-[#687386] text-[11px] ml-1">
              ({avaliacoes})
            </span>

          </div>

        </div>

        {/* Duração + play */}
        <div className="flex items-center shrink-0">

          <span className="text-[#687386] text-[11px] mr-2">
            {duracao}
          </span>

          <button className="w-9 h-9 rounded-full bg-[#58AAF0] flex items-center justify-center hover:bg-[#4a8bc2] transition cursor-pointer">

            <PlayIcon
              size={17}
              color="#FFFFFF"
              fill="currentColor"
            />

          </button>

        </div>

      </div>


      {/* Parte inferior */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#354052]">

        {/* Salvo */}
        <div className="flex items-center">

          <BookmarkSimpleIcon
            size={17}
            className="fill-[#58AAF0] text-[#58AAF0]"
          />

          <span className="text-[#58AAF0] text-[11px] ml-1">
            Salva
          </span>

        </div>

        {/* Mais opções */}
        <button className="text-[#D0D0D5] cursor-pointer">

          <DotsThreeIcon size={20} />

        </button>

      </div>

    </div>
  );
}