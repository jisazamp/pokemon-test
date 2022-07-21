const API_URL = import.meta.env.VITE_API_URL;

// Get pokemons
export const getPokemon = async () => {
  try {
    const response = await fetch(`${API_URL}/?idAuthor=1`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

// Add new pokemon
export const addPokemon = async (pokemon) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const response = await fetch(`${API_URL}/?idAuthor=1`, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(pokemon),
    });

    return response.json();
  } catch (error) {
    console.error(error);
  }
};

// Delete pokemon by id
export const deletePokemon = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

    return response.json();
  } catch (error) {
    console.error(error);
  }
};

// Set edit pokemon
export const setEditPokemon = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);

    return response.json();
  } catch (error) {
    console.error(error);
  }
};

// Confirm pokemon edit
export const editPokemonData = async (pokemon) => {
  try {
    const response = await fetch(`${API_URL}/${pokemon.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pokemon),
    });

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
