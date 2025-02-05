import Image from "next/image"
import igniteLogo from "../src/assets/Ignite-simbol.svg"

export function Header (){
    return(
        <div className="flex justify-center items-center gap-3 p-5 bg-zinc-800 text-2xl">
            <Image src={igniteLogo} width={60} alt="Logo do Ignite Feed" />
            <strong>Ignite Feed</strong>
        </div>
    )
}