const API_URL = 'https://api.sheetbest.com/sheets/a9673c78-6875-4609-b560-9180f0828394';


export const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao consumir dados do Sheet.best:', error);
    throw error;
  }
};


export const addData = async (newData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao adicionar dados:', error);
    throw error;
  }
};


export const deleteData = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao deletar dados:', error);
    throw error;
  }
};
