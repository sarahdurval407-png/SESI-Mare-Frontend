import { Heart, MessageCircle } from "lucide-react";
import MusicCard from "./musicCard";

interface PostCardProps {
  name: string;
  username: string;
  time: string;
  content: string;

  musicTitle: string;
  artist: string;

  likes: number;
  comments: number;
}

export default function PostCard({
  name,
  username,
  time,
  content,
  musicTitle,
  artist,
  likes,
  comments,
}: PostCardProps) {
  return (
    <article className="border border-[#354052] bg-[#111420] rounded-lg p-4">
      {/* Usuário */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-[#697386]" />

        <div>
          <div className="flex">
            <p className="text-[14px] text-[#d4d9e2]">{name}</p>

            <p className="text-[14px] text-[#697386] ml-1">@{username}</p>
          </div>

          <p className="text-[12px] text-[#697386]">há {time}</p>
        </div>
      </div>

      {/* Texto */}
      <p className="text-[14px] leading-5 text-[#d1d5db] mb-4">{content}</p>

      {/* Música */}
      <MusicCard tipo="post" titulo={musicTitle} artista={artist} />

      {/* Ações */}
      <div className="flex items-center mt-4 text-[#697386]">
        <div className="flex items-center gap-4">
          {/* Curtidas */}
          <button className="flex items-center gap-1.5 cursor-pointer">
            <Heart size={16} />

            <span className="text-[12px]">{likes}</span>
          </button>

          {/* Comentários */}
          <button className="flex items-center gap-1.5 cursor-pointer">
            <MessageCircle size={16} />

            <span className="text-[12px]">{comments}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
