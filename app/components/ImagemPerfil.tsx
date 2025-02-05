interface ImagemPerfilProps{
    linkUrl: string;
}

export function ImagemPerfil(props: ImagemPerfilProps) {
    return(
        <div className="w-16 bg-zinc-800 border rounded-md border-green-500">
            <img className="p-1 rounded-md" src={props.linkUrl} alt="Foto de Perfil" />
        </div>
    )
}