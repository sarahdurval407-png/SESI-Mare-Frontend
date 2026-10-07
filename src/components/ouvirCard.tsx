import { BsAppleMusic } from "react-icons/bs";
import { FaAmazon, FaSpotify } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

interface OuvirCardProps {
  spotifyURL?: string | null;
}

export default function OuvirCard({ spotifyURL }: OuvirCardProps) {
  function abrirSpotify() {
    if (!spotifyURL) {
      alert("Essa música não possui um link do Spotify.");
      return;
    }

    window.open(spotifyURL, "_blank");
  }

  return (
    <section className="mt-5 rounded-xl border border-[#273349] bg-[#182131] p-3">
      <h2 className="text-[24px] font-medium text-white">
        Ouvir
      </h2>

      <p className="mb-3 mt-1 text-[12px] text-[#8d96a6]">
        Conecte a plataforma que você usa para ouvir.
      </p>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <button
          onClick={abrirSpotify}
          className="
            flex h-[40px] cursor-pointer items-center gap-2
            rounded-md border border-[#293449] bg-[#111824]
            px-2 text-[12px] text-white transition
            hover:bg-[#172131]
          "
        >
          <FaSpotify size={24} className="text-[#1DB954]" />
          Spotify
        </button>

        <button
          className="
            flex h-[40px] cursor-pointer items-center gap-2
            rounded-md border border-[#293449] bg-[#111824]
            px-2 text-[12px] text-white transition
            hover:bg-[#172131]
          "
        >
          <SiYoutubemusic size={24} className="text-[#FF0033]" />
          YouTube Music
        </button>

        <button
          className="
            flex h-[40px] cursor-pointer items-center gap-2
            rounded-md border border-[#293449] bg-[#111824]
            px-2 text-[12px] text-white transition
            hover:bg-[#172131]
          "
        >
          <FaAmazon size={24} className="text-[#25B7D3]" />
          Amazon Music
        </button>

        <button
          className="
            flex h-[40px] cursor-pointer items-center gap-2
            rounded-md border border-[#293449] bg-[#111824]
            px-2 text-[12px] text-white transition
            hover:bg-[#172131]
          "
        >
          <BsAppleMusic size={24} className="text-[#FF4E6B]" />
          Apple Music
        </button>
      </div>
    </section>
  );
}