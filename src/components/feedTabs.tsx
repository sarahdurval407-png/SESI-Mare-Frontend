interface FeedTabsProps {
  abaAtiva: "paraVoce" | "seguindo";
  setAbaAtiva: (aba: "paraVoce" | "seguindo") => void;
}

export default function FeedTabs({
  abaAtiva,
  setAbaAtiva,
}: FeedTabsProps) {
  return (
    <div className="mb-5 flex items-center justify-center gap-10 px-2 mt-5">
      <button
        onClick={() => setAbaAtiva("paraVoce")}
        className={`pb-2 text-lg cursor-pointer ${
          abaAtiva === "paraVoce"
            ? "border-b-2 border-[#58a9e8] text-white"
            : "text-[#697386]"
        }`}
      >
        Para você
      </button>

      <button
        onClick={() => setAbaAtiva("seguindo")}
        className={`pb-2 text-lg cursor-pointer ${
          abaAtiva === "seguindo"
            ? "border-b-2 border-[#58a9e8] text-white"
            : "text-[#697386]"
        }`}
      >
        Seguindo
      </button>
    </div>
  );
}