import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
    CircleHelp,
    ChevronDown,
    ChevronUp,
    Search,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function FAQ() {
    const [perguntaAberta, setPerguntaAberta] = useState<number | null>(null);

    const perguntas = [
        {
            pergunta: "O que é a Maré?",
            resposta:
                "A Maré é uma plataforma para descobrir músicas, compartilhar opiniões e interagir com outros usuários. Você pode avaliar músicas, criar posts, seguir pessoas e salvar suas músicas favoritas.",
        },
        {
            pergunta: "A Maré reproduz as músicas?",
            resposta:
                "Não. A Maré funciona como uma plataforma de descoberta e interação musical. Ao escolher uma música, você pode ser direcionado para o Spotify para ouvi-la.",
        },
        {
            pergunta: "Como faço uma avaliação?",
            resposta:
                "Escolha uma música e crie um post compartilhando sua opinião. Você pode adicionar uma avaliação de 1 a 5 estrelas e escrever um comentário sobre a música.",
        },
        {
            pergunta: "Como salvar uma música?",
            resposta:
                "Ao encontrar uma música que deseja guardar, utilize a opção de salvar. As músicas salvas ficam disponíveis na sua área de músicas salvas para que você possa encontrá-las novamente.",
        },
        {
            pergunta: "Como seguir outro usuário?",
            resposta:
                "Acesse o perfil do usuário que deseja acompanhar e clique na opção de seguir. As publicações desse usuário poderão aparecer no seu feed de pessoas que você segue.",
        },
        {
            pergunta: "Como editar meu perfil?",
            resposta:
                "Acesse seu perfil e entre nas opções de edição. Você poderá alterar informações como nome, foto e biografia e salvar as alterações.",
        },
        {
            pergunta: "Como alterar minha senha?",
            resposta:
                "Acesse as configurações da sua conta e procure pela opção de segurança. Informe sua senha atual, escolha uma nova senha e salve as alterações.",
        },
        {
            pergunta: "Como funcionam as recomendações?",
            resposta:
                "Durante o cadastro, você pode escolher seus gêneros e artistas favoritos. Essas informações ajudam a Maré a apresentar conteúdos relacionados aos seus interesses musicais.",
        },
        {
            pergunta: "Posso curtir e comentar uma publicação?",
            resposta:
                "Sim. Você pode interagir com as publicações do feed curtindo e deixando comentários para compartilhar sua opinião com outros usuários.",
        },
        {
            pergunta: "Esqueci minha senha. O que faço?",
            resposta:
                "Na tela de login, utilize a opção de recuperação de senha para iniciar o processo de redefinição do acesso à sua conta.",
        },
    ];

    return (
        <>
            <Navbar />

            {/* HERO */}
            <section
                className="relative bg-gradient-to-r from-[#080A10] to-[#1A3854] text-white w-full pt-40 pb-20 px-24 overflow-hidden"
                style={{ fontFamily: "Inter, sans-serif" }}
            >

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <CircleHelp
                        size={70}
                        className="mx-auto mb-6 text-[#58AAF0]"
                    />

                    <h1 className="text-6xl font-bold">
                        Central de Ajuda
                    </h1>

                    <p className="text-xl mt-5 text-[#D5E8F8]">
                        Encontre respostas para as dúvidas mais frequentes sobre a Maré.
                    </p>

                    {/* Pesquisa */}
                    <div className="mt-10 max-w-2xl mx-auto relative">
                        <Search
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            placeholder="Pesquisar uma dúvida..."
                            className="w-full bg-white rounded-xl py-4 pl-14 pr-5 text-gray-800 outline-none shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-[#fafafa] py-20 px-24">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-semibold text-[#306DA6] mb-10">
                        Perguntas frequentes
                    </h2>

                    <div className="space-y-5">
                        {perguntas.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border shadow-sm overflow-hidden"
                            >
                                <button
                                    onClick={() =>
                                        setPerguntaAberta(
                                            perguntaAberta === index ? null : index
                                        )
                                    }
                                    className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition cursor-pointer"
                                >
                                    <span className="text-lg font-medium text-[#2D2D2D]">
                                        {item.pergunta}
                                    </span>

                                    {perguntaAberta === index ? (
                                        <ChevronUp className="text-[#58AAF0]" />
                                    ) : (
                                        <ChevronDown className="text-[#58AAF0]" />
                                    )}
                                </button>

                                {perguntaAberta === index && (
                                    <div className="px-6 pb-6 border-t">
                                        <p className="pt-5 text-gray-600 leading-7">
                                            {item.resposta}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-20 bg-gradient-to-r from-[#306DA6] to-[#58AAF0] rounded-3xl p-14 text-center text-white">
                        <h2 className="text-4xl font-bold">
                            Ainda não encontrou sua resposta?
                        </h2>

                        <p className="mt-4 mb-8 text-lg text-[#E4EFFF]">
                            Entre em contato com nossa equipe e tire suas dúvidas.
                        </p>

                        <Link to="/contato" className="px-10 py-4 rounded-lg border border-white hover:bg-white hover:text-[#306DA6] transition cursor-pointer hover:scale-105">
                            Entrar em contato
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}