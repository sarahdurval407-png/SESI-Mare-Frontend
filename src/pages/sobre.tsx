import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

function Sobre() {

    return (
        <>
            <Navbar />

            {/* HERO */}
            <section
                className="relative bg-gradient-to-r from-[#080A10] to-[#1A3854] text-white w-full pt-60 pb-40  px-24 overflow-hidden"
                style={{ fontFamily: "Inter, sans-serif" }}
            >

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        Sobre a Maré
                    </h1>

                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#D5E8F8]">
                        Um espaço para descobrir músicas, compartilhar opiniões e
                        conectar pessoas através da música.
                    </p>

                </div>

            </section>


            {/* HISTÓRIA */}
            <section className="py-20 px-6 md:px-12 lg:px-24 text-center max-w-4xl mx-auto">

                <h2 className="text-4xl font-semibold text-[#306DA6] mb-10">
                    Nossa História
                </h2>

                <p className="text-gray-600 leading-relaxed">
                    A Maré surgiu com a ideia de criar um espaço onde a música pudesse
                    ser mais do que apenas algo para ouvir. Nossa proposta é aproximar
                    pessoas que compartilham interesses musicais, permitindo descobrir
                    novas músicas, publicar opiniões, avaliar faixas e acompanhar o
                    que outras pessoas estão ouvindo e recomendando.
                </p>

                <p className="text-gray-600 leading-relaxed mt-4">
                    A plataforma foi desenvolvida pensando em uma experiência simples
                    e intuitiva, reunindo descoberta musical e interação entre usuários
                    em um só lugar.
                </p>

            </section>


            {/* O QUE NOS GUIA */}
            <section className="py-20 px-6 md:px-12 lg:px-24 text-center bg-[#F4F8FC]">

                <h2 className="text-4xl font-semibold text-[#306DA6] mb-10">
                    O que nos guia
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <h3 className="text-xl font-semibold mb-2">
                            Descoberta
                        </h3>

                        <p className="text-gray-600">
                            Facilitar a descoberta de músicas e artistas que combinam
                            com os interesses de cada usuário.
                        </p>
                    </div>


                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <h3 className="text-xl font-semibold mb-2">
                            Comunidade
                        </h3>

                        <p className="text-gray-600">
                            Criar um espaço onde pessoas possam compartilhar opiniões
                            e conversar sobre música.
                        </p>
                    </div>


                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <h3 className="text-xl font-semibold mb-2">
                            Simplicidade
                        </h3>

                        <p className="text-gray-600">
                            Oferecer uma experiência simples, organizada e agradável
                            para descobrir e interagir com músicas.
                        </p>
                    </div>

                </div>

            </section>


            {/* FUNCIONALIDADES */}
            <section className="py-20 px-6 md:px-12 lg:px-24 text-center">

                <h2 className="text-4xl font-semibold text-[#306DA6] mb-10">
                    O que você pode fazer na Maré
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white rounded-2xl p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-2">
                            Avaliar músicas
                        </h3>

                        <p className="text-gray-600">
                            Dê notas de 1 a 5 estrelas e compartilhe sua opinião
                            sobre suas músicas favoritas.
                        </p>
                    </div>


                    <div className="bg-white rounded-2xl p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-2">
                            Criar publicações
                        </h3>

                        <p className="text-gray-600">
                            Compartilhe suas descobertas e converse com outros
                            usuários através de publicações.
                        </p>
                    </div>


                    <div className="bg-white rounded-2xl p-6 shadow-md">
                        <h3 className="text-xl font-semibold mb-2">
                            Salvar músicas
                        </h3>

                        <p className="text-gray-600">
                            Guarde músicas que você deseja ouvir novamente e
                            mantenha sua coleção organizada.
                        </p>
                    </div>

                </div>

            </section>


            {/* EQUIPE */}
            <section className="py-20 px-6 md:px-12 lg:px-24 text-center bg-[#F4F8FC]">

                <h2 className="text-4xl text-[#306DA6] mb-10">
                    Nosso Time
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

                    {[
                        {
                            nome: "Brenda Maria",
                            funcao: "Dev Mobile & Designer",
                            imagem: ""
                        },
                        {
                            nome: "Celeny Ordonez",
                            funcao: "Desenvolvedora Mobile",
                            imagem: ""
                        },
                        {
                            nome: "Evellyn Caitano",
                            funcao: "Desenvolvedora Mobile",
                            imagem: ""
                        },
                        {
                            nome: "Miguel Francelino",
                            funcao: "Desenvolvedor Full-Stack",
                            imagem: ""
                        },
                        {
                            nome: "Samuel Lira",
                            funcao: "Desenvolvedor Back-End & APIs",
                            imagem: ""
                        },
                        {
                            nome: "Sarah Luiza",
                            funcao: "Dev Front End & Designer",
                            imagem: ""
                        }
                    ].map((membro, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-md"
                        >

                            <img
                                src={membro.imagem}
                                className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-3"
                            />

                            <h4 className="font-semibold">
                                {membro.nome}
                            </h4>

                            <span className="text-sm text-gray-500">
                                {membro.funcao}
                            </span>

                        </div>

                    ))}

                </div>

            </section>


            {/* CTA */}
            <section className="py-20 text-center px-6">

                <h2 className="text-4xl text-[#306DA6] mb-4">
                    Pronto para entrar na Maré?
                </h2>

                <p className="text-gray-600 mb-8">
                    Descubra músicas, compartilhe suas opiniões e encontre novos
                    artistas para ouvir.
                </p>

                <Link
                    to="/home"
                    className="bg-[#58AAF0] text-white px-10 py-4 rounded-lg hover:scale-105 transition cursor-pointer"
                >
                    Explorar a Maré
                </Link>

            </section>



            <Footer />
        </>
    );
}

export default Sobre;