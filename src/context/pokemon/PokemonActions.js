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

// Search characters by name
export const searchCharacterByName = async (name) => {
  try {
    const response = await fetch(`${API_URL}/character/?name=${name}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
