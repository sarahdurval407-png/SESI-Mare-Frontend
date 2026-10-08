import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import PageLayout from "../components/pageLayout";
import PageContent from "../components/pageContent";
import SearchBar from "../components/searchbar";
import MusicCard from "../components/musicCard";
import PostCard from "../components/postCard";
import { API_URL } from "../api";

export default function Resultados() {
    const [params] = useSearchParams();
    const termo = params.get("q") || "";

    const [musicas, setMusicas] = useState<any[]>([]);
    const [artistas, setArtistas] = useState<any[]>([]);
    const [posts, setPosts] = useState<any[]>([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        let ativo = true;

        async function carregar() {
            setCarregando(true);

            try {
                const respostas = await Promise.all([
                    fetch(`${API_URL}/musicas`),
                    fetch(`${API_URL}/artistas`),
                    fetch(`${API_URL}/posts`),
                ]);

                if (respostas.some((r) => !r.ok)) {
                    throw new Error("Erro ao buscar resultados");
                }

                const [m, a, p] = await Promise.all(
                    respostas.map((r) => r.json())
                );

                if (ativo) {
                    setMusicas(m);
                    setArtistas(a);
                    setPosts(p);
                }
            } catch (erro) {
                console.error(erro);
            } finally {
                if (ativo) setCarregando(false);
            }
        }

        carregar();

        return () => {
            ativo = false;
        };
    }, []);

    function normalizar(valor: unknown) {
        return String(valor ?? "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }

    const q = normalizar(termo.trim());

    const musicasFiltradas = musicas.filter(
        (m) =>
            normalizar(m.titulo).includes(q) ||
            normalizar(m.artista?.nome).includes(q)
    );

    const artistasFiltrados = artistas.filter(
        (a) => normalizar(a.nome).includes(q)
    );

    const postsFiltrados = posts.filter(
        (p) =>
            normalizar(p.texto).includes(q) ||
            normalizar(p.usuario?.nome).includes(q) ||
            normalizar(p.usuario?.username).includes(q) ||
            normalizar(p.musica?.titulo).includes(q) ||
            normalizar(p.musica?.artista?.nome).includes(q)
    );

    return (
        <PageLayout>
            <PageContent>
                <div className="mx-auto max-w-4xl">
                    <div className="sticky top-0 z-20 bg-[#080A10] pb-4 pt-6">
                        <SearchBar />
                    </div>

                    <h1 className="mb-2 font-serif text-3xl text-white">
                        Resultados da pesquisa
                    </h1>

                    <p className="mb-8 text-sm text-[#9CA3AF]">
                        Busca por: "{termo}"
                    </p>

                    {carregando ? (
                        <p className="text-sm text-[#9CA3AF]">
                            Buscando resultados...
                        </p>
                    ) : !q ? (
                        <p className="text-sm text-[#9CA3AF]">
                            Digite algo na barra de pesquisa.
                        </p>
                    ) : (
                        <div className="flex flex-col gap-10">
                            <section>
                                <h2 className="mb-4 font-serif text-xl text-white">
                                    Músicas ({musicasFiltradas.length})
                                </h2>

                                {musicasFiltradas.length ? (
                                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                        {musicasFiltradas.map((m) => (
                                            <MusicCard
                                                key={m.id}
                                                id={m.id}
                                                tipo="quadrado"
                                                titulo={m.titulo}
                                                artista={m.artista?.nome}
                                                capa={m.capa}
                                                nota={m.nota}
                                                avaliacoes={m.avaliacoes}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-[#697386]">
                                        Nenhuma música encontrada.
                                    </p>
                                )}
                            </section>

                            <section>
                                <h2 className="mb-4 font-serif text-xl text-white">
                                    Artistas ({artistasFiltrados.length})
                                </h2>

                                {artistasFiltrados.length ? (
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        {artistasFiltrados.map((a) => (
                                            <Link
                                                key={a.id}
                                                to={`/artista/${a.id}`}
                                                className="flex items-center gap-3 rounded-xl border border-[#273349] bg-[#111420] p-3 hover:bg-[#202536]"
                                            >
                                                <img
                                                    src={a.fotoURL || ""}
                                                    alt=""
                                                    className="h-12 w-12 rounded-full object-cover"
                                                />
                                                <span className="text-sm text-white">
                                                    {a.nome}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-[#697386]">
                                        Nenhum artista encontrado.
                                    </p>
                                )}
                            </section>

                            <section>
                                <h2 className="mb-4 font-serif text-xl text-white">
                                    Posts ({postsFiltrados.length})
                                </h2>

                                {postsFiltrados.length ? (
                                    <div className="flex flex-col gap-5">
                                        {postsFiltrados.map((p) => (
                                            <PostCard
                                                postId={p.id}
                                                key={p.id}
                                                name={p.usuario?.nome}
                                                username={p.usuario?.username}
                                                foto={p.usuario?.foto}
                                                time={p.dataCriacao}
                                                content={p.texto}
                                                musicId={p.musica?.id}
                                                musicTitle={p.musica?.titulo}
                                                artist={p.musica?.artista?.nome}
                                                musicCover={p.musica?.capa}
                                                nota={p.nota}
                                                avaliacoes={p.musica?.avaliacoes}
                                                likes={p._count?.curtidas}
                                                comments={p._count?.comentarios}
                                                duracaoSegundos={p.musica?.duracaoSegundos}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-[#697386]">
                                        Nenhum post encontrado.
                                    </p>
                                )}
                            </section>
                        </div>
                    )}
                </div>
            </PageContent>
        </PageLayout>
    );
}
