import { Comment } from "./Comment"
import { ImagemPerfil } from "./ImagemPerfil"

interface PostProps{
    nome: string,
    cargo: string,
    assunto: string
    fotoUrl: string
}

export function Post(prop: PostProps){
    return(
        <article className="bg-zinc-800 p-10 rounded-lg mt-8 max-md:p-5 max-md:text-[14px] first:mt-0">
            <header className="flex items-center justify-between pb-6">
                <div className="flex items-center gap-4">
                    <ImagemPerfil linkUrl={prop.fotoUrl}/> 
                    <div className="flex flex-col">
                        <strong className="text-zinc-100 leading-6">{prop.nome}</strong>
                        <span className="text-sm text-zinc-400 leading-6">{prop.cargo}</span>
                    </div>
                </div>
                    <time className="text-zinc-400 text-sm" title="05 de Fevereiro às 14:59h" dateTime="05/02/2025 14:59:00">Publicado à 1h</time>
            </header>
            <main className="leading-6 text-zinc-300">
                <p className="mt-4">{prop.assunto}</p>
            </main>
            <section className="mt-6">
                <form id="formulario" className="flex flex-col gap-4 pt-6 pb-5 border-t border-zinc-500 group">
                    <strong className="text-zinc-100">Deixe seu feedback</strong>
                    <textarea
                        placeholder="Escreva um comentário..."
                        className="bg-zinc-900 text-zinc-100 leading-6 h-24 p-3 rounded-lg resize-none border border-zinc-900 focus:border-green-500 outline-none"
                    />
                    <footer className="self-end invisible max-h-0 group-focus-within:visible group-focus-within:max-h-none">
                        <button 
                            className="font-bold bg-green-600 px-6 pt-4 pb-3 rounded-lg transition-colors duration-100 hover:bg-green-500" 
                            type="submit">
                                Publicar
                        </button>
                    </footer>
                </form>
            </section>
            <div>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}