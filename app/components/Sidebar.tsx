"use client";
import { PencilLine } from '@phosphor-icons/react';
import { ImagemPerfil } from "./ImagemPerfil";

export function Sidebar (){
    return(
        <aside className="bg-zinc-800 rounded-lg overflow-hidden lg:fixed">
            <img
                className="w-full h-[72px] object-cover"
                src="https://images.unsplash.com/photo-1502951682449-e5b93545d46e?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="flex justify-center mt-[-2rem]">
                <ImagemPerfil linkUrl="https://avatars.githubusercontent.com/u/101829531?v=4" />
            </div>
            <div className="flex flex-col items-center pt-4 pb-6">
                <strong className="text-zinc-100 leading-6">Renê Gomes</strong>
                <span className="text-sm text-zinc-400 leading-6">Desenvolvedor Front-end</span>
            </div>
            <footer className="border-t border-zinc-600 pt-6 pb-8 px-6">
                <a className="flex justify-center items-center gap-3 bg-transparent text-green-500 border border-green-500 rounded-lg h-[50px] px-6 font-bold transition-colors duration-100 hover:bg-green-500 hover:text-white" href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}