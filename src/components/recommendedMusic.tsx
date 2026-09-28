interface RecommendedMusicProps {
  title: string;
  artist: string;
}

export default function RecommendedMusic({
  title,
  artist,
}: RecommendedMusicProps) {
  return (
    <div className="w-full rounded-lg border border-[#354052] bg-[#111420] p-3">
      <div className="flex items-center gap-3">
        {/* Capa */}
        <div className="h-14 w-14 shrink-0 rounded-lg bg-[#697386]" />

        {/* Informações */}
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs text-[#d7dbe2]">{title}</p>

          <p className="mt-1 truncate text-[10px] text-[#697386]">{artist}</p>
        </div>
      </div>
    </div>
  );
}
