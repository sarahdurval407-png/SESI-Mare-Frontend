import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export default function SearchBar() {
  return (
    <div className="w-full">
      <div className="flex h-10 w-full items-center gap-3 rounded-lg border border-[#354052] bg-[#111420] px-4">
        <MagnifyingGlassIcon size={16} className="shrink-0 text-[#718096]" />

        <input
          type="text"
          placeholder="Buscar..."
          className="w-full border-none bg-transparent text-xs text-white outline-none placeholder:text-[#718096]"
        />
      </div>
    </div>
  );
}
