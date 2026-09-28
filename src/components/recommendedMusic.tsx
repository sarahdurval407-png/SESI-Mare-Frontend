interface RecommendedMusicProps {
    title: string
    artist: string
}

export default function RecommendedMusic({
    title,
    artist,
}: RecommendedMusicProps) {

    return (
        <div className="w-full border border-[#354052] bg-[#111420] rounded-lg p-3 flex items-center gap-3">

            {/* Capa */}
            <div className="w-14 h-14 rounded-lg bg-[#697386] shrink-0" />

            {/* Informações */}
            <div className="min-w-0 flex-1">

                <p className="text-xs text-[#d7dbe2] truncate">
                    {title}
                </p>

                <p className="text-[10px] text-[#697386] truncate mt-1">
                    {artist}
                </p>

            </div>

        </div>
    )
}