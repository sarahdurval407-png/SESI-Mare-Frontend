import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import fundoLogin from "../assets/login1.png";
import logo from "../assets/mare.png";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const resposta = await fetch(
        "http://10.92.199.40:3000/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: login,
            senha: senha,
          }),
        }
      );

      const dados = await resposta.json();

      // Erro no login
      if (!resposta.ok) {
        toast.error(
          dados.error || "Email ou senha incorretos."
        );
        return;
      }

      // Salva o token da API
      localStorage.setItem("token", dados.token);

      // Salva os dados do usuário
      localStorage.setItem(
        "usuario",
        JSON.stringify(dados.usuario)
      );

      // Aviso de sucesso
      toast.success("Login realizado com sucesso!");

      // Aguarda um pouco para mostrar o aviso
      setTimeout(() => {
        navigate("/home");
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
        backgroundImage: `url(${fundoLogin})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Camada de sombreamento */}
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

      {/* CAIXA DE LOGIN */}
      <div className="w-full md:w-[400px] relative z-10 flex flex-col justify-center my-auto mr-[5%] lg:mr-[8%]">

        <h1 className="text-[36px] font-serif text-white text-center mb-1">
          Login
        </h1>

        <p className="text-gray-400 text-[13px] font-serif text-center mb-8">
          Bem-vindo de volta! Continue de onde você parou.
        </p>

        {/* FORMULÁRIO */}
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-5"
        >

          {/* E-MAIL */}
          <div className="space-y-1.5">
            <label
              htmlFor="login"
              className="block text-gray-300 text-[14px] font-serif"
            >
              E-mail ou Usuário
            </label>

            <input
              id="login"
              type="text"
              required
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="E-mail ou Usuário"
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

            {/* Campo + olhinho */}
            <div className="relative">
              <input
                id="senha"
                type={mostrarSenha ? "text" : "password"}
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Senha"
                className="w-full px-4 py-3 pr-12 rounded-md bg-[#131c2a]/90 border border-[#1e2d42] text-white placeholder-gray-500 outline-none transition focus:border-blue-400 text-[14px]"
              />

              {/* BOTÃO DO OLHINHO */}
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition cursor-pointer"
                aria-label={
                  mostrarSenha
                    ? "Ocultar senha"
                    : "Mostrar senha"
                }
              >
                {mostrarSenha ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          {/* ESQUECEU A SENHA */}
          <div className="flex justify-start">
            <p className="text-[12px] text-gray-400 font-serif">
              Esqueceu a senha?{" "}
              <Link
                to="/recuperar-senha"
                className="text-[#519bf5] hover:underline"
              >
                Redefinir senha
              </Link>
            </p>
          </div>

          {/* BOTÃO ENTRAR */}
          <button
            type="submit"
            className="w-full h-[48px] bg-[#519bf5] hover:bg-[#3b82f6] text-white font-serif text-[16px] rounded-lg transition duration-200 cursor-pointer shadow-md mt-2"
          >
            Entrar
          </button>

          {/* CRIAR CONTA */}
          <p className="text-center text-[13px] text-gray-400 font-serif mt-4">
            Não tem uma conta?{" "}
            <Link
              to="/cadastro"
              className="text-[#519bf5] hover:underline ml-1"
            >
              Criar
            </Link>
          </p>

        </form>
      </div>
    </main>
  );
}

export default Login;