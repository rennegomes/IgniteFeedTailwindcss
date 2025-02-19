"use client";
import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { ImagemPerfil } from './ImagemPerfil';

import { rotaComment } from '@/app/services/rotaComment'

interface CommentProps {
    id?: number,
    idPublicacao: number,
    idPostagem: number,
    nome: string,
    assunto: string
    fotoUrl: string
    dataPublicada: string
}

export function Comment(props: CommentProps) {

    const { rotaDeletaComentario, carregaComentarios } = rotaComment();

    const deletaComentario = async() =>{
        if (!props.id) {
            console.error("ID do comentário não está definido.");
            return;
        }
        console.log("Chamando rotaDeletaComentario com ID:", props.id);
    
        try {
            await rotaDeletaComentario(props.id);
            console.log("Comentário deletado com sucesso");
            carregaComentarios();
        } catch (error) {
            console.error("Erro ao deletar o comentário:", error);
        }
    } 

    if (props.idPublicacao === props.idPostagem ){
        return(
            <div className="grid grid-cols-[50px_1fr] items-start gap-4 mb-6 last:mb-0">
                <ImagemPerfil borda={false} linkUrl={props.fotoUrl} />
                <div>
                    <div className="flex flex-col gap-4 bg-zinc-700 p-4 rounded-lg group">
                        <header className="flex justify-between items-center ">
                            <div>
                                <strong className='text-sm'>{props.nome}</strong>
                                <p className="text-xs text-zinc-400">{props.dataPublicada}</p>
                            </div>
                            <button onClick={deletaComentario} className='invisible group-hover:visible text-zinc-400 hover:text-red-500' title="Excluir"><Trash size={24}/></button>
                        </header>
                        <p className="pb-2 text-sm text-zinc-200">{props.assunto}</p>
                    </div>
                    <footer>
                        <button className='flex gap-2 mt-4 items-center text-sm text-zinc-400 hover:text-green-400'>
                            <ThumbsUp size={16} />
                            Aplaudir <samp className='before:content-["\2022"] before:mr-1 before:ml-[-0.25rem]'>30</samp>
                        </button>
                    </footer>
                </div>
            </div>
        )
    }
    
}