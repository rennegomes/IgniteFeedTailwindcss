import { useState, useEffect } from 'react';
import { mostraComentarios, adcionaComentario, deleteComentario } from './apiComment';

export const rotaComment = () => {
  const [dados, setDados] = useState([{ id: 1, idPublicacao:1, nome: "", fotoUrl: "", conteudo: "", dataPublicada: "" }]);
  const [error, setError] = useState(null);

    const carregaComentarios = async () => {
        try {
            const deta = await mostraComentarios();
            setDados(deta);
        } catch (error) {
            setError('Erro ao carregar dados');
        }
    };

    const criaComentarios = async (novoComentario) => {
        try {
            const data = await adcionaComentario(novoComentario);
            setDados(prevData => [...prevData, data]);
        } catch (error) {
            setError('Erro ao adicionar dados');
        }
    };

    const rotaDeletaComentario = async (id) => {
        try {
            await deleteComentario(id);
            setDados(prevData => prevData.filter(item => item !== id))
        } catch (error) {
            setError('Erro ao daletar dados');
        }
    }

    useEffect(() => {
        carregaComentarios();
      }, []);

    return {
        dados,
        error,
        carregaComentarios,
        rotaComment,
        criaComentarios,
        rotaDeletaComentario
    };
};
