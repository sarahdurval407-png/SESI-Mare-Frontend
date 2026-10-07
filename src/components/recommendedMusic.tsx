interface RecommendedMusicProps {
  titulo: string;
  artist: string;
  capa?: string | null;
}

export default function RecommendedMusic({
  titulo,
  artist,
  capa,
}: RecommendedMusicProps) {
  return (
    <div className="w-full rounded-lg border border-[#354052] bg-[#111420] p-3">
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