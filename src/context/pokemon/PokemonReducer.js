const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'GET_POKEMON':
      return { ...state, pokemon: action.payload, loading: false };

    case 'ADD_POKEMON':
      return {
        ...state,
        pokemon: [...state.pokemon, action.payload],
        editPokemon: {},
        loading: false,
      };

    case 'DELETE_POKEMON':
      const newPokemons = state.pokemon.filter((p) => p.id !== action.payload);

      return {
        ...state,
        pokemon: newPokemons,
        editPokemon: {},
        loading: false,
      };

    case 'EDIT_POKEMON':
      const editedPokemons = state.pokemon.map((p) =>
        action.payload.id === p.id ? action.payload : p
      );

      return {
        ...state,
        pokemon: editedPokemons,
        editPokemon: {},
        loading: false,
      };

    case 'SET_EDIT_POKEMON':
      return { ...state, editPokemon: action.payload };

    case 'SEARCH_POKEMON':
      return { ...state, filteredPokemon: action.payload, loading: false };

    case 'CLEAR_SEARCH':
      return { ...state, filteredPokemon: [], loading: false };

    case 'SET_LOADING':
      return { ...state, loading: true };

    default:
      return state;
  }
};

export default pokemonReducer;
