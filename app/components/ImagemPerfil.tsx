interface ImagemPerfilProps{
    linkUrl: string;
    borda?: boolean;
}

export function ImagemPerfil(props: ImagemPerfilProps) {

    const borda = props.borda != false;

    return(
        <div className={ borda ? "w-16 bg-zinc-800 border rounded-md border-green-500" : "w-14 " }>
            <img className={ borda ? "p-1 rounded-md" : " p-1 rounded-lg" } src={props.linkUrl} alt="Foto de Perfil" />
        </div>
    )
}