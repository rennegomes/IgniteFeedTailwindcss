"use client";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import { useState, useEffect } from "react";
import { rotaApi } from "@/app/services/rotaApi";

export default function Home() {
  const { dados, error, loadData, apiAddData, apiDeleteData } = rotaApi();

  useEffect(() => {
    loadData();
  }, []);

  const apiAddClick = () => {
    const newData = {
      nome: "Novo Nome",
      idade: 25,
    };
    apiAddData(newData);
  };

  return (
    <div className="focus:outline-none focus:ring-2 focus:ring-green-500">
      <Header />
      <div className="grid grid-cols-[256px_1fr] items-start gap-8 max-w-6xl my-8 mx-auto px-4 max-md:grid-cols-1">
        <div>
          <Sidebar />
        </div>
        <main>
          {dados.map((item) =>(
            <Post key={item.id} fotoUrl={item.fotoUrl} nome={item.nome} cargo={item.cargo} assunto={item.conteudo} />
          ))}
        </main>
      </div>
    </div>
  );
}
