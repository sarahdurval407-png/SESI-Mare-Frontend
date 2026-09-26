import logo from "../assets/logoSidebar.png"
import { Link, useNavigate } from "react-router-dom"

import {
    HouseLineIcon,
    PlaylistIcon,
    BookmarkSimpleIcon,
    UserIcon,
    GearIcon,
} from "@phosphor-icons/react";

interface LoggedUser {
    nome: string,
    email: string
}

export default function Sidebar() {
    const loggedUser: LoggedUser | null = JSON.parse(sessionStorage.getItem("user") || "null")

    /* função de logout */
    const navigate = useNavigate();
    function handleLogout() {
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("token");

        navigate("/login");
    }

    return (
        <aside className="w-85 h-screen bg-[#111420] border-r-2 border-[#354052] text-white flex flex-col justify-between fixed top-0 left-0" style={{ fontFamily: "Inter, sans-serif", fontWeight: 300 }}>

            {/* TOPO */}
            <div>

                {/* Logo */}
                <div className="p-6  flex items-center gap-2 cursor-pointer">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="h-16" />
                    </Link>
                </div>


                {/* MENU */}
                <nav className="mt-4 flex flex-col">

                    <Link
                        to="/home"
                        className="flex items-center gap-4 px-8 py-6 hover:bg-white/5 transition"
                    >
                        <HouseLineIcon size={20} />
                        Início
                    </Link>

                    <Link
                        to="/explorar"
                        className="flex items-center gap-4 px-8 py-6 hover:bg-white/5 transition"
                    >
                        <PlaylistIcon size={20} />
                        Explorar
                    </Link>

                    <Link
                        to="/salvos"
                        className="flex items-center gap-4 px-8 py-6 hover:bg-white/5 transition"
                    >
                        <BookmarkSimpleIcon size={20} />
                        Salvos
                    </Link>

                    <Link
                        to="/perfil"
                        className="flex items-center gap-4 px-8 py-6 hover:bg-white/5 transition"
                    >
                        <UserIcon size={20} />
                        Perfil
                    </Link>

                </nav>

                {/* Post */}

                {/* Post */}
                <div className="px-8 my-6">
                    <button
                        className="
      w-full
      bg-[#58AAF0]
      text-white
      py-3
      rounded-lg
      hover:bg-[#4a8bc2]
      transition
      cursor-pointer
      font-medium
    "
                    >
                        Post
                    </button>
                </div>
            </div>

            <div className="px-8 py-6 cursor-pointer  hover:bg-white/5 transition">
                <button className="flex items-center gap-3 cursor-pointer">
                    <GearIcon size={20} />
                    Configurações
                </button>
            </div>

        </aside>
    )
}