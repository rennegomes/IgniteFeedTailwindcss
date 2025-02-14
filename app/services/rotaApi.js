import { useState, useEffect } from 'react';
import { fetchData, addData, deleteData } from './api';

export const rotaApi = () => {
  const [dados, setDados] = useState([{ id: "", nome: "", fotoUrl: "", cargo: "", conteudo: "", dataPublicada: ""  }]);
  const [error, setError] = useState(null);

  
  const loadData = async () => {
    try {
      const data = await fetchData();
      setDados(data);
    } catch (err) {
      setError('Erro ao carregar dados');
    }
  };

  
  const apiAddData = async (newData) => {
    try {
      const added = await addData(newData);
      setDados(prevData => [...prevData, added]);  // Atualiza a lista com o novo item
    } catch (err) {
      setError('Erro ao adicionar dados');
    }
  };
  

  const apiDeleteData = async (id) => {
    try {
      await deleteData(id);
      setDados(prevData => prevData.filter(item => item.id !== id));  // Remove o item deletado
    } catch (err) {
      setError('Erro ao deletar dados');
    }
  };

  
  useEffect(() => {
    loadData();
  }, []);

  return {
    dados,
    error,
    loadData,
    apiAddData,
    apiDeleteData
  };
};
