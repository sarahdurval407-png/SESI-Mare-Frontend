import { useNavigate } from "react-router-dom";

interface RecommendedMusicProps {
  id: number;
  titulo: string;
  artist: string;
  capa?: string | null;
}

export default function RecommendedMusic({
  id,
  titulo,
  artist,
  capa,
}: RecommendedMusicProps) {
  const navigate = useNavigate();
  
  return (
    <div
      onClick={() => id && navigate(`/musica/${id}`)}
      className="w-full rounded-lg border border-[#354052] bg-[#111420] p-3 cursor-pointer"
    >
      <div className="flex items-center gap-3">
        {/* Capa */}
        <img
          src={capa || "/logo.png"}
          alt={titulo}
          className="h-14 w-14 shrink-0 rounded-lg object-cover"
        />

        {/* Informações */}
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs text-[#d7dbe2]">
            {titulo}
          </p>

          <p className="mt-1 truncate text-[10px] text-[#697386]">
            {artist}
          </p>
        </div>
      </div>
    </div>
  );
}