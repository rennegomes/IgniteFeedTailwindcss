"use client";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import { rotaApi } from "@/app/services/rotaApi";

export default function Home() {
  const { dados } = rotaApi();

  return (
    <div className="focus:outline-none focus:ring-2 focus:ring-green-500">
      <Header />
      <div className="grid grid-cols-[256px_1fr] items-start gap-8 max-w-6xl my-8 mx-auto px-4 lg:mt-28 max-md:grid-cols-1">
        <div>
          <Sidebar />
        </div>
        <main>
          {dados.map((item) =>(
            <Post key={item.id} id={item.id} fotoUrl={item.fotoUrl} nome={item.nome} cargo={item.cargo} assunto={item.conteudo} dataPublicada={item.dataPublicada} />
          ))}
        </main>
      </div>
    </div>
  );
}
