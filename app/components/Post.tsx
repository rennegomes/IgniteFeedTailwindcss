import { useState } from "react";
import { Comment } from "./Comment"
import { ImagemPerfil } from "./ImagemPerfil"


import { rotaComment } from '@/app/services/rotaComment'

interface PostProps{
    id: number,
    nome: string,
    cargo: string,
    assunto: string
    fotoUrl: string
    dataPublicada: string
}

export function Post(props: PostProps){

    const { dados, criaComentarios, carregaComentarios } = rotaComment();

    const [comentario, setComentario] = useState('');

  const comentarioEscrevendo = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComentario(event.target.value);
  };

  const verificaComentarioVazio = comentario.trim() === '';

  function gerarIdUnico() {
        return Date.now() + Math.floor(Math.random() * 1000);
    }

    const idUnico = gerarIdUnico();

  const enviaComentario = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!verificaComentarioVazio) {
      await criaComentarios({ id: idUnico, idPublicacao: props.id, nome: props.nome, fotoUrl: props.fotoUrl, conteudo: comentario, dataPublicada: props.dataPublicada });

      setComentario('');
      carregaComentarios();
    }   
  };

    const atualizaComentarios = () => {
        carregaComentarios();
    }

    return(
        <article className="bg-zinc-800 p-10 rounded-lg mt-8 max-md:p-5 max-md:text-[14px] first:mt-0">
            <header className="flex items-center justify-between pb-6">
                <div className="flex items-center gap-4">
                    <ImagemPerfil linkUrl={props.fotoUrl}/> 
                    <div className="flex flex-col">
                        <strong className="text-zinc-100 leading-6">{props.nome}</strong>
                        <span className="text-sm text-zinc-400 leading-6">{props.cargo}</span>
                    </div>
                </div>
                    <time className="text-zinc-400 text-sm" title="05 de Fevereiro às 14:59h" dateTime="05/02/2025 14:59:00">{props.dataPublicada}</time>
            </header>
            <main className="leading-6 text-zinc-300">
                <p className="mt-4">{props.assunto}</p>
            </main>
            <section className="mt-6">
                <form onSubmit={enviaComentario} id="formulario" className="flex flex-col gap-4 pt-6 pb-5 border-t border-zinc-500 group">
                    <strong className="text-zinc-100">Deixe seu feedback</strong>
                    <textarea
                        value={comentario}
                        onChange={comentarioEscrevendo}
                        required
                        placeholder="Escreva um comentário..."
                        className="bg-zinc-900 text-zinc-100 leading-6 h-24 p-3 rounded-lg resize-none border border-zinc-900 focus:border-green-500 outline-none"
                    />
                    <footer className="self-end invisible max-h-0 group-focus-within:visible group-focus-within:max-h-none">
                        <button 
                            className="font-bold bg-green-600 px-6 pt-4 pb-3 rounded-lg transition-colors duration-100 enabled:hover:bg-green-500 disabled:opacity-15 disabled:cursor-not-allowed"
                            type="submit"
                            disabled={verificaComentarioVazio}
                        >
                            Publicar
                        </button>
                    </footer>
                </form>
            </section>
            <div>
                {dados.map((item) => (
                    <Comment key={item.id + 1} id={item.id} idPublicacao={item.idPublicacao} idPostagem={props.id} nome={item.nome} assunto={item.conteudo} fotoUrl={item.fotoUrl} dataPublicada={item.dataPublicada} funcaoAtualiza={atualizaComentarios} />
                ))
                }
            </div>
        </article>
    )
}