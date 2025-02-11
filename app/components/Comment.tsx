"use client";
import { ThumbsUp, Trash } from '@phosphor-icons/react';

export function Comment() {
    return(
        <div className="grid grid-cols-[50px_1fr] gap-4 mb-6 last:mb-0">
            <img className="rounded-lg" src="https://avatars.githubusercontent.com/u/101829531?v=4" alt="Foto de perfil" />
            <div>
                <div className="flex flex-col gap-4 bg-zinc-700 p-4 rounded-lg group">
                    <header className="flex justify-between items-center ">
                        <div>
                            <strong className='text-sm'>Renê Gomes</strong>
                            <p className="text-xs text-zinc-400">Cerca de 1h atrás</p>
                        </div>
                        <button className='invisible group-hover:visible text-zinc-400 hover:text-red-500' title="Excluir"><Trash size={24}/></button>
                    </header>
                    <p className="pb-2 text-sm text-zinc-200">Muito bom Renê, parabéns!!</p>
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