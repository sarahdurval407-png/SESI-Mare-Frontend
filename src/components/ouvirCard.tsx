import { BsAppleMusic } from "react-icons/bs";
import { FaAmazon, FaSpotify } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";

export default function ouvirCard() {
  return (
    <section className="mt-5 rounded-xl bg-[#182131] border border-[#273349] p-3">
      <h2 className="text-white text-[24px] font-medium">Ouvir</h2>

      <p className="text-[#8d96a6] text-[12px] mt-1 mb-3">
        Conecte a plataforma que você usa para ouvir.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <button
          className="
                    h-[40px]
                    rounded-md
                    border border-[#293449]
                    bg-[#111824]
                    flex items-center
                    px-2
                    gap-2
                    text-[12px]
                    text-white
                    hover:bg-[#172131]
                    transition
                    cursor-pointer
                  "
        >
          <FaSpotify size={24} className="text-[#1DB954]" />
          Spotify
        </button>

        <button
          className="
                    h-[40px]
                    rounded-md
                    border border-[#293449]
                    bg-[#111824]
                    flex items-center
                    px-2
                    gap-2
                    text-[12px]
                    text-white
                    hover:bg-[#172131]
                    transition
                    cursor-pointer
                  "
        >
          <SiYoutubemusic size={24} className="text-[#FF0033]" />
          YouTube Music
        </button>

        <button
          className="
                    h-[40px]
                    rounded-md
                    border border-[#293449]
                    bg-[#111824]
                    flex items-center
                    px-2
                    gap-2
                    text-[12px]
                    text-white
                    hover:bg-[#172131]
                    transition
                    cursor-pointer
                  "
        >
          <FaAmazon size={24} className="text-[#25B7D3]" />
          Amazon Music
        </button>

        <button
          className="
                    h-[40px]
                    rounded-md
                    border border-[#293449]
                    bg-[#111824]
                    flex items-center
                    px-2
                    gap-2
                    text-[12px]
                    text-white
                    hover:bg-[#172131]
                    transition
                    cursor-pointer
                  "
        >
          <BsAppleMusic size={24} className="text-[#FF4E6B]" />
          Apple Music
        </button>
      </div>
    </section>
  );
}
