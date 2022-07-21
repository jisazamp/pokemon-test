const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'GET_POKEMON':
      return { ...state, pokemon: action.payload, loading: false };

    case 'ADD_POKEMON':
      return {
        ...state,
        pokemon: [...state.pokemon, action.payload],
        loading: false,
      };

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
