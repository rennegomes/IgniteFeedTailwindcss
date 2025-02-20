import Image from "next/image"
import igniteLogo from "../src/assets/Ignite-simbol.svg"

export function Header (){
    return(
        <div className="lg:top-0 w-full flex justify-center items-center gap-3 p-5 bg-zinc-800 text-2xl lg:fixed">
            <Image src={igniteLogo} width={60} alt="Logo do Ignite Feed" />
            <strong>Ignite Feed</strong>
        </div>
    )
}