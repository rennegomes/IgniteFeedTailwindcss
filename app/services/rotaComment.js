import { useState, useEffect } from 'react';
import { mostraComentarios, adcionaComentario, deleteComentario } from './apiComment';

export const rotaComment = () => {
  const [dados, setDados] = useState([{ id: "", idPublicacao:"", nome: "", fotoUrl: "", conteudo: "", dataPublicada: "" }]);
  const [error, setError] = useState(null);

    const carregaComentarios = async () => {
        try {
            const deta = await mostraComentarios();
            setDados(deta);
        } catch (error) {
            setError('Erro ao carregar dados');
        }
    }

    useEffect(() => {
        carregaComentarios();
      }, []);

    return {
        dados,
        error,
        rotaComment
    };
};
