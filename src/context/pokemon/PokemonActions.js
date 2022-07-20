const API_URL = import.meta.env.VITE_API_URL;

// Get characters
export const getPokemon = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    return data;
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
