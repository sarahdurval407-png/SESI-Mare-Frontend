import {
  PlayIcon,
  BookmarkSimpleIcon,
  DotsThreeIcon,
  Star,
} from "@phosphor-icons/react";

import logo from "../assets/logo.png";
import { StarIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type MusicCardProps = {
  id?: number;
  tipo: "banner" | "quadrado" | "post";
  titulo?: string;
  artista?: string;
  capa?: string | null;
  nota?: number;
  avaliacoes?: number;
  duracaoSegundos?: number;
  onRemover?: () => void;
};

export default function MusicCard({
  id,
  tipo,
  titulo = "Nome da música",
  artista = "Nome do artista",
  capa,
  nota = 0,
  avaliacoes = 0,
  duracaoSegundos = 0,
  onRemover,
}: MusicCardProps) {
  function formatarDuracao(segundos: number) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;

    return `${minutos}:${segundosRestantes.toString().padStart(2, "0")}`;
  }

  const navigate = useNavigate();

  const [salva, setSalva] = useState(false);
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    if (!id) return;

    async function verificarSalvamento() {
      try {
        const token = localStorage.getItem("token");

        if (!token) return;

        const resposta = await fetch(
          "http://localhost:3000/usuarios/me/salvos",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!resposta.ok) return;

        const salvos = await resposta.json();

        const estaSalva = salvos.some(
          (item: any) => item.musica?.id === id
        );

        setSalva(estaSalva);
      } catch (error) {
        console.error("Erro ao verificar música salva:", error);
      }
    }

    verificarSalvamento();
  }, [id]);

  async function alternarSalvamento(e: React.MouseEvent) {
    e.stopPropagation();

    if (!id || salvando) return;

    try {
      setSalvando(true);

      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Usuário não autenticado");
        return;
      }

      const resposta = await fetch(
        `http://localhost:3000/musicas/${id}/salvar`,
        {
          method: salva ? "DELETE" : "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!resposta.ok) {
        throw new Error("Erro ao alterar salvamento");
      }

      setSalva(!salva);

      if (salva) {
        onRemover?.();
      }
    } catch (error) {
      console.error("Erro ao salvar/remover música:", error);
    } finally {
      setSalvando(false);
    }
  }

  // =========================
  // CARD BANNER
  // =========================

  if (tipo === "banner") {
    return (
      <div
        onClick={() => id && navigate(`/musica/${id}`)}
        className="w-[320px] h-[160px] shrink-0 cursor-pointer rounded-lg overflow-hidden border border-[#354052] bg-[#111420]">
        <div className="relative w-full h-full">
          {/* Imagem */}
          <img
            src={capa || logo}
            alt={titulo}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Camada escura */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Conteúdo */}
          <div className="relative z-10 w-full h-full p-4 flex flex-col justify-between">
            {/* Play */}
            <div className="flex justify-end">
              <button className="w-10 h-10 rounded-full bg-[#58AAF0] flex items-center justify-center hover:bg-[#4a8bc2] transition cursor-pointer">
                <PlayIcon size={18} color="#FFFFFF" fill="currentColor" />
              </button>
            </div>

            {/* Informações */}
            <div>
              <p className="text-white text-lg truncate">{titulo}</p>

              <p className="text-[#D0D0D5] text-xs mt-1 truncate">{artista}</p>

              <div className="flex items-center mt-2">
                <span className="text-[#D0D0D5] text-[11px] ml-1">
                  {avaliacoes > 0 ? (
                    <>
                      <StarIcon
                        size={13}
                        className="fill-[#58AAF0] text-[#58AAF0]"
                      />
                      <span className="text-white text-[11px] ml-1">
                        {nota.toFixed(1)}
                      </span>
                      <span className="text-[#b5bbca] text-[11px] ml-1">
                        ({avaliacoes}{" "}
                        {avaliacoes === 1 ? "avaliação" : "avaliações"})
                      </span>
                    </>
                  ) : (
                    <span className="text-[#b5bbca] text-[11px]">
                      Sem avaliações
                    </span>
                  )}
                </span>

                <span className="text-[#D0D0D5] text-[11px] ml-3">
                  {formatarDuracao(duracaoSegundos)}
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
      <div
        onClick={() => id && navigate(`/musica/${id}`)}
        className="w-[140px] shrink-0 border border-[#354052] rounded-lg p-2 bg-[#111420] cursor-pointer">
        <img
          src={capa || logo}
          alt={titulo}
          className="w-[120px] h-[120px] rounded-xl object-cover mx-auto"
        />

        <p className="text-white text-xs mt-2 truncate">{titulo}</p>

        <p className="text-[#8B93A3] text-[11px] mt-1 truncate">{artista}</p>

        <div className="flex items-center mt-1">
          <Star size={12} className="fill-[#58AAF0] text-[#58AAF0]" />

          <span className="text-[#D0D0D5] text-[10px] ml-1">{nota}</span>
        </div>
      </div>
    );
  }

  // =========================
  // CARD POST / SALVO
  // =========================

  return (
    <div
      onClick={() => id && navigate(`/musica/${id}`)}
      className="bg-[#111420] border border-[#354052] rounded-lg p-3 w-full cursor-pointer">
      {/* Parte principal */}
      <div className="flex items-center w-full">
        {/* Capa */}
        <img
          src={capa || logo}
          alt={titulo}
          className="w-16 h-16 rounded-xl object-cover shrink-0"
        />

        {/* Informações */}
        <div className="flex-1 min-w-0 ml-3">
          <p className="text-white text-sm truncate">{titulo}</p>

          <p className="text-[#8B93A3] text-xs mt-1 truncate">{artista}</p>

          <div className="flex items-center mt-2">
            <span className="text-[#687386] text-[11px] ml-1">
              {avaliacoes > 0 ? (
                <>
                  <div className="flex">
                    <StarIcon
                      size={13}
                      className="fill-[#58AAF0] text-[#58AAF0]"
                    />
                    <span className="text-white text-[11px] ml-1">
                      {nota.toFixed(1)}
                    </span>
                    <span className="text-[#687386] text-[11px] ml-1">
                      ({avaliacoes}{" "}
                      {avaliacoes === 1 ? "avaliação" : "avaliações"})
                    </span>
                  </div>
                </>
              ) : (
                <span className="text-[#687386] text-[11px]">
                  Sem avaliações
                </span>
              )}
            </span>
          </div>
        </div>

        {/* Duração + play */}
        <div className="flex items-center shrink-0">
          <span className="text-[#687386] text-[11px] mr-2">
            {formatarDuracao(duracaoSegundos)}
          </span>

          <button className="w-9 h-9 rounded-full bg-[#58AAF0] flex items-center justify-center hover:bg-[#4a8bc2] transition cursor-pointer">
            <PlayIcon size={17} color="#FFFFFF" fill="currentColor" />
          </button>
        </div>
      </div>

      {/* Parte inferior */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#354052]">
        {/* Salvo */}
        <button
          onClick={alternarSalvamento}
          disabled={salvando}
          className="flex items-center cursor-pointer"
        >
          <BookmarkSimpleIcon
            size={17}
            weight={salva ? "fill" : "regular"}
            className={
              salva
                ? "text-[#58AAF0] fill-[#58AAF0]"
                : "text-[#687386]"
            }
          />

          <span
            className={`text-[11px] ml-1 ${salva ? "text-[#58AAF0]" : "text-[#687386]"
              }`}
          >
            {salva ? "Salva" : "Salvar"}
          </span>
        </button>

        {/* Mais opções */}
        <button className="text-[#D0D0D5] cursor-pointer">
          <DotsThreeIcon size={20} />
        </button>
      </div>
    </div>
  );
}
