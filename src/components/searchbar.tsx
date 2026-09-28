import { Search } from "lucide-react"

export default function SearchBar() {
    return (
        <div className="w-full max-w-[600px]">
            <div className="flex items-center gap-3 bg-[#111420] border border-[#354052] rounded-lg px-4 h-10">

                <Search
                    size={16}
                    className="text-[#718096] shrink-0"
                />

                <input
                    type="text"
                    placeholder="Buscar..."
                    className="bg-transparent outline-none border-none text-xs text-white placeholder:text-[#718096] w-full"
                />

            </div>
        </div>
    )
}