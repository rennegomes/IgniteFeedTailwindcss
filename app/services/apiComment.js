const URL = "https://api.sheetbest.com/sheets/8726e845-8d26-466a-9d1a-00d146c50a01";

export const mostraComentarios = async () => {
    try {
        const resposta = await fetch(URL);
        const dados = await resposta.json();
        return dados;
    } catch (error) {
        console.error('Erro ao consumir dados do Sheet.best:', error);
        throw error;
    }
};


export const adcionaComentario = async (novoComentario) => {
  try {
    const resposta = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novoComentario),
    });
    const dados = await resposta.json();
    return dados;
  } catch (error) {
    console.error('Erro ao adicionar dados:', error);
    throw error;
  }
};

export const deleteComentario = async (id) => {
    try {
      const resposta = await fetch(`${URL}/${id}`, {
        method: 'DELETE',
      });
      const dados = await resposta.json();
      return dados;
    } catch (error) {
      console.error('Erro ao deletar dados:', error);
      throw error;
    }
  };