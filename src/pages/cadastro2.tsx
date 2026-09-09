import { useState, type FormEvent } from "react";
import { Eye, EyeOff, UserRound, Mail } from "lucide-react";

import fundo from "../assets/fundinho.png";
import logo from "../assets/Mare.png";

interface CadastroForm {
    usuario: string;
    email: string;
    senha: string;
    confirmarSenha: string;
}

const FORM_INICIAL: CadastroForm = {
    usuario: "",
    email: "",
    senha: "",
    confirmarSenha: "",
};

function Cadastro() {
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
    const [form, setForm] = useState<CadastroForm>(FORM_INICIAL);
    const [erro, setErro] = useState<string | null>(null);

    function atualizarCampo(campo: keyof CadastroForm, valor: string) {
        setForm((prev) => ({ ...prev, [campo]: valor }));
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (form.senha !== form.confirmarSenha) {
            setErro("As senhas não coincidem.");
            return;
        }

        setErro(null);
        // Integrar com a API de cadastro aqui
        console.log("Cadastro:", form);
    }

    return (
        <main className="min-h-screen bg-[#080d14] text-white border-4 border-[#252d38]">

            {/* HERO */}
            <section className="relative min-h-screen overflow-hidden flex">

                {/* FUNDO */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{ backgroundImage: `url(${fundo})` }}
                />

                {/* LOGO NO CANTO SUPERIOR */}
                <div className="absolute top-5 left-5 z-20">
                    <img
                        src={logo}
                        alt="Maré"
                        className="w-[180px] h-[80px] object-contain"
                    />
                </div>

                {/* CONTEÚDO */}
                <div className="relative z-10 flex flex-1 items-center justify-end">

                    {/* CAIXA DO CADASTRO */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-[#0d1520]/80 p-10 rounded-lg w-[700px] max-w-[92%] mr-[10%]"
                    >

                        {/* TÍTULO */}
                        <div className="text-center">
                            <h1 className="text-3xl font-serif mb-3">
                                Cadastro
                            </h1>

                            <p className="text-gray-300 text-sm mb-8">
                                Crie sua conta e mergulhe no Maré.
                            </p>
                        </div>

                        {/* USUÁRIO */}
                        <label htmlFor="usuario" className="block text-sm font-serif mb-2">
                            Usuário
                        </label>
                        <div className="relative mb-5">
                            <input
                                id="usuario"
                                name="usuario"
                                type="text"
                                placeholder="Usuário"
                                value={form.usuario}
                                onChange={(e) => atualizarCampo("usuario", e.target.value)}
                                className="
                                    w-full h-[45px] px-4 pr-10 rounded
                                    bg-[#1a2230] text-white border border-gray-600
                                    outline-none placeholder:text-gray-500
                                    focus:border-[#5ca7e8]
                                "
                            />
                            <UserRound
                                size={20}
                                strokeWidth={1.5}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            />
                        </div>

                        {/* E-MAIL */}
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
                                    w-full h-[45px] px-3 pr-10 rounded
                                    bg-[#1a2230] text-white border border-gray-600
                                    outline-none placeholder:text-gray-500
                                    focus:border-[#5ca7e8]
                                "
                            />
                            <Mail
                                size={20}
                                strokeWidth={1.5}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            />
                        </div>

                        {/* SENHA */}
                        <label htmlFor="senha" className="block text-sm font-serif mb-2">
                            Senha
                        </label>
                        <div className="relative mb-5">
                            <input
                                id="senha"
                                name="senha"
                                type={mostrarSenha ? "text" : "password"}
                                placeholder="Senha"
                                value={form.senha}
                                onChange={(e) => atualizarCampo("senha", e.target.value)}
                                className="
                                    w-full h-[45px] px-3 pr-12 rounded
                                    bg-[#1a2230] text-white border border-gray-600
                                    outline-none placeholder:text-gray-500
                                    focus:border-[#5ca7e8]
                                "
                            />
                            <button
                                type="button"
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                                aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                                className="
                                    absolute right-3 top-1/2 -translate-y-1/2
                                    text-gray-400 hover:text-white transition cursor-pointer
                                "
                            >
                                {mostrarSenha ? (
                                    <EyeOff size={20} strokeWidth={1.5} />
                                ) : (
                                    <Eye size={20} strokeWidth={1.5} />
                                )}
                            </button>
                        </div>

                        {/* CONFIRMAR SENHA */}
                        <label htmlFor="confirmarSenha" className="block text-sm font-serif mb-2">
                            Confirmar Senha
                        </label>
                        <div className="relative mb-2">
                            <input
                                id="confirmarSenha"
                                name="confirmarSenha"
                                type={mostrarConfirmarSenha ? "text" : "password"}
                                placeholder="Confirmar Senha"
                                value={form.confirmarSenha}
                                onChange={(e) => atualizarCampo("confirmarSenha", e.target.value)}
                                className="
                                    w-full h-[45px] px-3 pr-12 rounded
                                    bg-[#1a2230] text-white border border-gray-600
                                    outline-none placeholder:text-gray-500
                                    focus:border-[#5ca7e8]
                                "
                            />
                            <button
                                type="button"
                                onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
                                aria-label={mostrarConfirmarSenha ? "Ocultar senha" : "Mostrar senha"}
                                className="
                                    absolute right-3 top-1/2 -translate-y-1/2
                                    text-gray-400 hover:text-white transition cursor-pointer
                                "
                            >
                                {mostrarConfirmarSenha ? (
                                    <EyeOff size={20} strokeWidth={1.5} />
                                ) : (
                                    <Eye size={20} strokeWidth={1.5} />
                                )}
                            </button>
                        </div>

                        {/* ERRO DE VALIDAÇÃO */}
                        {erro && (
                            <p className="text-xs text-red-400 mb-3" role="alert">
                                {erro}
                            </p>
                        )}

                        {/* TERMOS */}
                        <p className="text-xs text-gray-400 mb-6 mt-3">
                            Ao criar sua conta, você concorda com nossos{" "}
                            <a href="#" className="text-[#5ca7e8] hover:underline">Termos de Uso</a> e{" "}
                            <a href="#" className="text-[#5ca7e8] hover:underline">Política de Privacidade</a>.
                        </p>

                        {/* BOTÃO CRIAR CONTA */}
                        <button
                            type="submit"
                            className="
                                mt-4 w-full h-[50px] border-2 border-white rounded
                                font-serif text-[18px] text-gray-200 transition
                                hover:bg-white/15
                            "
                        >
                            Criar conta
                        </button>

                        {/* LINK LOGIN */}
                        <div className="mt-4 text-center">
                            <p className="text-xs text-gray-300">
                                Já tem uma conta?
                                <a href="#" className="text-[#5ca7e8] ml-1 hover:underline">
                                    Entrar
                                </a>
                            </p>
                        </div>

                    </form>
                </div>
            </section>
        </main>
    );
}

export default Cadastro;
