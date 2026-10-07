import { Heart, MessageCircle } from "lucide-react";
import MusicCard from "./musicCard";
import calcularTempo from "../calcularTempo";
import fotoPadrao from "../assets/logo.png";

interface PostCardProps {
  name: string;
  username: string;
  foto?: string | null;

  time: string;
  content: string;
  nota?: number;

  musicTitle: string;
  artist: string;
  musicCover?: string | null;

  likes?: number;
  comments?: number;
  avaliacoes?: number;
}

export default function PostCard({
  name,
  username,
  foto,
  time,
  content,
  nota,
  musicTitle,
  musicCover,
  artist,
  likes,
  comments,
  avaliacoes,
}: PostCardProps) {
  return (
    <article className="border border-[#354052] bg-[#111420] rounded-lg p-4">
      {/* Usuário */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={foto || fotoPadrao}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div>
          <div className="flex">
            <p className="text-[14px] text-[#d4d9e2]">{name}</p>

            <p className="text-[14px] text-[#697386] ml-1">@{username}</p>
          </div>

          <p className="text-[12px] text-[#697386]">há {calcularTempo(time)}</p>
        </div>
      </div>

      {/* Texto */}
      <p className="text-[14px] leading-5 text-[#d1d5db] mb-4">{content}</p>

      {/* Música */}
      <MusicCard
        tipo="post"
        titulo={musicTitle}
        artista={artist}
        capa={musicCover}
        nota={nota}
        avaliacoes={avaliacoes}
      />

      {/* Ações */}
      <div className="flex items-center mt-4 text-[#697386]">
        <div className="flex items-center gap-4">
          {/* Curtidas */}
          <button className="flex items-center gap-1.5 cursor-pointer">
            <Heart size={16} />

            <span className="text-[12px]">{likes ?? 0}</span>
          </button>

          {/* Comentários */}
          <button className="flex items-center gap-1.5 cursor-pointer">
            <MessageCircle size={16} />

            <span className="text-[12px]">{comments ?? 0}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
