
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-hot-toast";

import fundoCadastro from "../assets/Login1.png";
import logo from "../assets/mare.png";

function Cadastro() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    usuario: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Verifica se as senhas são iguais
    if (formData.senha !== formData.confirmarSenha) {
      toast.error("As senhas não são iguais.");
      return;
    }

    // Verifica tamanho da senha
    if (formData.senha.length < 6) {
      toast.error("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      const resposta = await fetch(
        "http://10.92.199.40:3000/usuarios",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: formData.usuario,
            email: formData.email,
            senha: formData.senha,
          }),
        }
      );

      const dados = await resposta.json();

      // Erro retornado pela API
      if (!resposta.ok) {
        toast.error(
          dados.error || "Erro ao criar a conta."
        );
        return;
      }

      // Cadastro realizado
      toast.success("Conta criada com sucesso!");

      // Limpa o formulário
      setFormData({
        usuario: "",
        email: "",
        senha: "",
        confirmarSenha: "",
      });

      // Vai para a próxima página depois do aviso
      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      console.error(
        "Erro ao conectar com a API:",
        error
      );

      toast.error(
        "Não foi possível conectar ao servidor."
      );
    }
  };

  return (
    <main
      className="min-h-screen w-full flex items-center justify-end relative overflow-hidden px-8 lg:px-20"
      style={{
        backgroundColor: "#080d14",
        backgroundImage: `url(${fundoCadastro})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Camada de escurecimento */}
      <div className="absolute inset-0 bg-black/20" />

      {/* LOGO */}
      <div className="absolute top-8 left-10 z-20">
        <Link to="/inicio">
          <img
            src={logo}
            alt="Maré"
            className="w-[140px] h-[60px] object-contain"
          />
        </Link>
      </div>

      {/* CAIXA DE CADASTRO */}
      <div className="w-full md:w-[400px] relative z-10 flex flex-col justify-center my-auto mr-[5%] lg:mr-[8%] py-8">

        {/* TÍTULO */}
        <h1 className="text-[36px] font-serif text-white text-center mb-1">
          Cadastro
        </h1>

        <p className="text-gray-400 text-[13px] font-serif text-center mb-6">
          Crie sua conta agora e acesse todas as músicas disponíveis.
        </p>

        {/* FORMULÁRIO */}
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-4"
        >

          {/* USUÁRIO */}
          <div className="space-y-1.5">
            <label
              htmlFor="usuario"
              className="block text-gray-300 text-[14px] font-serif"
            >
              Usuário
            </label>

            <input
              id="usuario"
              name="usuario"
              type="text"
              required
              value={formData.usuario}
              onChange={handleChange}
              placeholder="Usuário"
              className="w-full px-4 py-3 rounded-md bg-[#131c2a]/90 border border-[#1e2d42] text-white placeholder-gray-500 outline-none transition focus:border-blue-400 text-[14px]"
            />
          </div>

          {/* E-MAIL */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-gray-300 text-[14px] font-serif"
            >
              E-mail
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              className="w-full px-4 py-3 rounded-md bg-[#131c2a]/90 border border-[#1e2d42] text-white placeholder-gray-500 outline-none transition focus:border-blue-400 text-[14px]"
            />
          </div>

          {/* SENHA */}
          <div className="space-y-1.5">
            <label
              htmlFor="senha"
              className="block text-gray-300 text-[14px] font-serif"
            >
              Senha
            </label>

            <div className="relative">
              <input
                id="senha"
                name="senha"
                type={
                  mostrarSenha
                    ? "text"
                    : "password"
                }
                required
                value={formData.senha}
                onChange={handleChange}
                placeholder="Senha"
                className="w-full px-4 py-3 pr-10 rounded-md bg-[#131c2a]/90 border border-[#1e2d42] text-white placeholder-gray-500 outline-none transition focus:border-blue-400 text-[14px]"
              />

              <button
                type="button"
                onClick={() =>
                  setMostrarSenha(!mostrarSenha)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              >
                {mostrarSenha ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* CONFIRMAR SENHA */}
          <div className="space-y-1.5">
            <label
              htmlFor="confirmarSenha"
              className="block text-gray-300 text-[14px] font-serif"
            >
              Confirmar Senha
            </label>

            <div className="relative">
              <input
                id="confirmarSenha"
                name="confirmarSenha"
                type={
                  mostrarConfirmarSenha
                    ? "text"
                    : "password"
                }
                required
                value={formData.confirmarSenha}
                onChange={handleChange}
                placeholder="Confirmar Senha"
                className="w-full px-4 py-3 pr-10 rounded-md bg-[#131c2a]/90 border border-[#1e2d42] text-white placeholder-gray-500 outline-none transition focus:border-blue-400 text-[14px]"
              />

              <button
                type="button"
                onClick={() =>
                  setMostrarConfirmarSenha(
                    !mostrarConfirmarSenha
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              >
                {mostrarConfirmarSenha ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* TERMOS */}
          <p className="text-[12px] text-gray-400 font-serif pt-1">
            Ao criar uma conta, você concorda com nossos{" "}
            <Link
              to="/termos"
              className="text-[#519bf5] hover:underline"
            >
              Termos de Uso
            </Link>{" "}
            e nossa{" "}
            <Link
              to="/privacidade"
              className="text-[#519bf5] hover:underline"
            >
              Política de Privacidade
            </Link>
            .
          </p>

          {/* BOTÃO */}
          <button
            type="submit"
            className="w-full h-[48px] bg-[#519bf5] hover:bg-[#3b82f6] text-white font-serif text-[16px] rounded-lg transition duration-200 cursor-pointer shadow-md mt-2"
          >
            Criar conta
          </button>

          {/* LOGIN */}
          <p className="text-center text-[13px] text-gray-400 font-serif mt-4">
            Já tem uma conta?{" "}
            <Link
              to="/login"
              className="text-[#519bf5] hover:underline ml-1"
            >
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Cadastro;

