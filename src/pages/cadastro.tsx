import { useState, type FormEvent } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import fundo from "../assets/fundinho.png";
import logo from "../assets/Mare.png";

interface LoginForm {
    email: string;
    senha: string;
}

const FORM_INICIAL: LoginForm = {
    email: "",
    senha: "",
};

function Login() {
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [form, setForm] = useState<LoginForm>(FORM_INICIAL);
    const [erro, setErro] = useState<string | null>(null);

    function atualizarCampo(campo: keyof LoginForm, valor: string) {
        setForm((prev) => ({ ...prev, [campo]: valor }));
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (!form.email || !form.senha) {
            setErro("Preencha e-mail e senha para continuar.");
            return;
        }

        setErro(null);
        // Integrar com a API de login aqui
        console.log("Login:", form);
    }

    return (
        <main className="min-h-screen bg-[#080d14] text-white border-4 border-[#252d38]">
            <section className="relative min-h-screen overflow-hidden flex">

                {/* Imagem de fundo */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{ backgroundImage: `url(${fundo})` }}
                />

                {/* Logo */}
                <div className="absolute top-5 left-5 z-20">
                    <img
                        src={logo}
                        alt="Maré"
                        className="w-[180px] h-[80px] object-contain"
                    />
                </div>

                {/* Área do login */}
                <div className="relative z-10 flex flex-1 items-center justify-end">
                    <form
                        onSubmit={handleSubmit}
                        className="w-[400px] max-w-[92%] mr-[7%] p-10 rounded-lg bg-[#0d1520]/80"
                    >

                        <div className="text-center">
                            <h1 className="text-3xl font-serif mb-3">
                                Login
                            </h1>

                            <p className="text-gray-300 text-sm mb-8">
                                Bem-vindo de volta! Continue de onde você parou.
                            </p>
                        </div>

                        {/* E-mail */}
                        <label htmlFor="email" className="block text-sm font-serif mb-2">
                            E-mail
                        </label>

                        <div className="relative mb-5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="E-mail"
                                value={form.email}
                                onChange={(e) => atualizarCampo("email", e.target.value)}
                                className="
                                    w-full
                                    h-[45px]
                                    px-3
                                    pr-10
                                    rounded
                                    bg-[#1a2230]
                                    text-white
                                    border
                                    border-gray-600
                                    outline-none
                                    placeholder:text-gray-500
                                    focus:border-[#5ca7e8]
                                "
                            />

                            <Mail
                                size={20}
                                strokeWidth={1.5}
                                className="
                                    absolute
                                    right-3
                                    top-1/2
                                    -translate-y-1/2
                                    text-gray-400
                                    pointer-events-none
                                "
                            />
                        </div>

                        {/* Senha */}
                        <label htmlFor="senha" className="block text-sm font-serif mb-2">
                            Senha
                        </label>

                        <div className="relative">
                            <input
                                id="senha"
                                name="senha"
                                type={mostrarSenha ? "text" : "password"}
                                placeholder="Senha"
                                value={form.senha}
                                onChange={(e) => atualizarCampo("senha", e.target.value)}
                                className="
                                    w-full
                                    h-[45px]
                                    px-3
                                    pr-12
                                    rounded
                                    bg-[#1a2230]
                                    text-white
                                    border
                                    border-gray-600
                                    outline-none
                                    placeholder:text-gray-500
                                    focus:border-[#5ca7e8]
                                "
                            />

                            <button
                                type="button"
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                                aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                                className="
                                    absolute
                                    right-3
                                    top-1/2
                                    -translate-y-1/2
                                    text-gray-400
                                    hover:text-white
                                    transition
                                    cursor-pointer
                                "
                            >
                                {mostrarSenha ? (
                                    <EyeOff
                                        size={20}
                                        strokeWidth={1.5}
                                    />
                                ) : (
                                    <Eye
                                        size={20}
                                        strokeWidth={1.5}
                                    />
                                )}
                            </button>
                        </div>

                        {/* Erro de validação */}
                        {erro && (
                            <p className="text-xs text-red-400 mt-3" role="alert">
                                {erro}
                            </p>
                        )}

                        {/* Recuperar senha */}
                        <div className="mt-3">
                            <Link
                                to="/redefinir-senha"
                                className="text-[#5ca7e8] text-xs hover:underline"
                            >
                                Esqueceu a senha? Redefinir senha
                            </Link>
                        </div>

                        {/* Entrar */}
                        <button
                            type="submit"
                            className="
                                mt-10
                                w-full
                                h-[50px]
                                border-2
                                border-white
                                rounded
                                font-serif
                                text-[18px]
                                text-gray-200
                                transition
                                hover:bg-white/15
                            "
                        >
                            Entrar
                        </button>

                        {/* Criar conta */}
                        <div className="mt-4 text-center">
                            <p className="text-xs text-gray-300">
                                Não tem uma conta?

                                <Link
                                    to="/cadastro2"
                                    className="text-[#5ca7e8] ml-1 hover:underline"
                                >
                                    Criar
                                </Link>
                            </p>
                        </div>

                    </form>
                </div>
            </section>
        </main>
    );
}

export default Login;
