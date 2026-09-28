
import Navbar from "../components/navbar"
import Footer from "../components/footer"

import fundo from "../assets/fundoHero.png"
import app_store from "../assets/app_store.png"
import play_store from "../assets/play_store.png"
import qrcode from "../assets/qrcode.png"

import { useNavigate } from "react-router-dom"


function Home() {

  const navigate = useNavigate();


  /* se não estiver logado, vai para o login */
  function handleComeçar() {

    const usuario = sessionStorage.getItem("user");

    if (!usuario) {
      navigate("/login");
      return;
    }

    navigate("/home")
  }


  return (
    <>

      <Navbar />


      {/* =================== HERO ====================== */}

      <div
        className="
          relative
          bg-[#080A10]
          text-white
          h-[100vh]
          flex
          items-center
          px-24
          overflow-hidden
        "
        style={{ fontFamily: "Inter, sans-serif" }}
      >

        {/* imagem de fundo */}

        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${fundo})` }}
        />

        {/* Texto */}

        <div className="relative z-10 max-w-2xl mt-24">

          <h1 className="text-6xl font-bold leading-tight">

            DESCUBRA, AVALIE E
            <br />

            COMPARTILHE MÚSICAS

          </h1>


          <h2 className="text-3xl font-light mt-3 text-[#58AAF0]">

            que combinam com você

          </h2>


          <div className="w-[520px] h-1 bg-[#58AAF0] my-6 rounded-full"></div>


          <p className="text-[16px] leading-6 max-w-[500px] text-gray-300">

            Encontre novas músicas, compartilhe suas descobertas
            e descubra o que outras pessoas estão ouvindo.

          </p>


          {/* BOTÃO */}

          <button
            onClick={handleComeçar}
            className="
              mt-8
              border
              text-lg
              border-[white]
              text-white
              px-20
              py-4
              rounded-lg
              hover:bg-[#58AAF0]
              hover:text-[#080D14]
              hover:border-[#58AAF0]
              cursor-pointer
              hover:scale-105
              transition
              duration-300
              outline-none
            "
          >

            Começar agora

          </button>

        </div>

      </div>



      {/* ================= DESTAQUES ================= */}

      <div className="bg-[#080D14] py-28 px-24">

        <h2
          className="text-5xl text-center text-[#58AAF0] mb-10"
          style={{ fontFamily: "Inter, sans-serif" }}
        >

          Destaques

        </h2>


        {/* Banner */}

        <div
          className="
            w-full
            h-80
            rounded-2xl
            border-2
            border-[#1d3653]
            bg-[#111A25]
            flex
            items-center
            justify-center
          "
        >

          <div className="text-center">

            <p className="text-3xl font-semibold text-white">

              Descubra novas músicas

            </p>

            <p className="text-gray-400 mt-3 text-lg">

              Encontre artistas e músicas que combinam com você.

            </p>

          </div>

        </div>

      </div>



      {/* ================= APP SECTION ================= */}

      <div
        className="
          bg-[#1d3653]
          px-24
          py-12
          flex
          items-center
          gap-10
        "
      >

        {/* espaço da esquerda */}

        <div className="flex-1 text-white text-center">

          <p className="text-3xl text-[#9FC5F3]">

            ACESSE DE QUALQUER LUGAR

          </p>


          <h2 className="text-5xl font-bold mt-2">

            Leve a Maré com você

          </h2>

        </div>


        {/* TEXTO */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            text-center
            text-white
            flex-1
          "
        >

          <h2 className="text-2xl mt-2">

           Acesse a Maré pelo seu celular.
          </h2>

          <div className="flex gap-4 justify-center mt-6">

            <img
              src={app_store}
              alt="App Store"
              className="
                w-[190px]
                h-auto
                cursor-pointer
                hover:scale-105
                transition
              "
            />


            <img
              src={play_store}
              alt="Google Play"
              className="
                w-[190px]
                h-auto
                cursor-pointer
                hover:scale-105
                transition
              "
            />

          </div>

        </div>



        {/* QR CODE */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            text-center
            text-white
            flex-1
          "
        >

          <p className="text-2xl mb-4">

            Ou acesse pelo QR Code

          </p>


          <img
            src={qrcode}
            alt="QR Code"
            className="w-[180px]"
          />

        </div>

      </div>



      {/* ================= FOOTER ================= */}

      <Footer />

    </>
  )
}

export default Home