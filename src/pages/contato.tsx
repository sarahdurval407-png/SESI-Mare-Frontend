import Navbar from "../components/navbar"
import Footer from "../components/footer"

import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa"

import fundo from "../assets/fundoHero.png"


function Contato() {

    return (
        <>

            <Navbar />

            <main
                className="
            relative
            min-h-[100vh]
            flex
            items-center
            justify-center
            px-6
            md:px-12
            lg:px-24
            py-16
            overflow-hidden
             bg-[#080D14]
             "
            >

                {/* IMAGEM DE FUNDO */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-cover
                        bg-center
                        bg-no-repeat
                    "
                    style={{
                        backgroundImage: `url(${fundo})`
                    }}
                />

                {/* CONTEÚDO */}

                <div className="relative z-10 flex justify-center w-full">

                    <section
                        className="
    w-full
    max-w-xl
    bg-[#111A25]
    shadow-xl
    rounded-2xl
    p-8
    my-12
"
                    >

                        {/* TÍTULO */}

                        <h1 className="text-3xl font-bold text-[#58AAF0] mb-2">

                            Fale conosco

                        </h1>


                        <p className="text-[#E4EFFF] mb-6">

                            Tem alguma dúvida, sugestão ou quer saber mais sobre a Maré?
                            Nossa equipe está pronta para te atender.

                        </p>


                        {/* FORMULÁRIO */}

                        <form className="flex flex-col gap-4">

                            <input
                                type="text"
                                name="nome"
                                placeholder="Seu nome"
                                required
                                className="
                                    bg-[#080D14]
                                    border
                                    border-[#445264]
                                    text-white
                                    placeholder-[#445264]
                                    p-3
                                    rounded-lg
                                    focus:outline-none
                                    focus:ring-1
                                    focus:ring-[#58AAF0]
                                "
                            />


                            <input
                                type="email"
                                name="email"
                                placeholder="Seu e-mail"
                                required
                                className="
                                    bg-[#080D14]
                                    border
                                    border-[#445264]
                                    text-white
                                    placeholder-[#445264]
                                    p-3
                                    rounded-lg
                                    focus:outline-none
                                    focus:ring-1
                                    focus:ring-[#58AAF0]
                                "
                            />


                            <input
                                type="tel"
                                name="telefone"
                                placeholder="Seu telefone"
                                required
                                className="
                                    bg-[#080D14]
                                    border
                                    border-[#445264]
                                    text-white
                                    placeholder-[#445264]
                                    p-3
                                    rounded-lg
                                    focus:outline-none
                                    focus:ring-1
                                    focus:ring-[#58AAF0]
                                "
                            />


                            <textarea
                                name="mensagem"
                                placeholder="Sua mensagem..."
                                required
                                className="
                                    bg-[#080D14]
                                    border
                                    border-[#445264]
                                    text-white
                                    placeholder-[#445264]
                                    p-3
                                    rounded-lg
                                    h-32
                                    resize-none
                                    focus:outline-none
                                    focus:ring-1
                                    focus:ring-[#58AAF0]
                                "
                            />


                            <p className="text-xs text-[#B8C7D9]">

                                Ao enviar, você concorda com nossa política de privacidade.

                            </p>


                            <button
                                type="submit"
                                className="
                                    mt-2
                                    bg-[#58AAF0]
                                    text-[#0E192A]
                                    py-3
                                    rounded-lg
                                    font-semibold
                                    hover:bg-[#306DA6]
                                    hover:text-white
                                    hover:scale-105
                                    transition
                                    duration-300
                                    shadow-md
                                    cursor-pointer
                                "
                            >

                                Enviar mensagem

                            </button>

                        </form>


                        {/* ATENDIMENTO */}

                        <div className="text-center mt-8">

                            <h2 className="text-2xl font-bold text-[#58AAF0] mb-2">

                                Atendimento

                            </h2>


                            <p className="text-[#E4EFFF] mb-4">

                                Você pode falar com a gente pelos canais abaixo:

                            </p>


                            <div className="space-y-3 text-[#E4EFFF]">

                                <p className="flex items-center justify-center gap-2">

                                    <FaPhone className="text-[#58AAF0]" />

                                    (11) 99999-9999

                                </p>


                                <p className="flex items-center justify-center gap-2">

                                    <FaEnvelope className="text-[#58AAF0]" />

                                    contato@mare.com

                                </p>


                                <p className="flex items-center justify-center gap-2">

                                    <FaClock className="text-[#58AAF0]" />

                                    Segunda a sexta, 9h às 18h

                                </p>

                            </div>

                        </div>

                    </section>

                </div>

            </main>


            <Footer />

        </>
    )
}


export default Contato