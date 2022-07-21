import { useState, useContext } from 'react';
import PokemonContext from '../context/pokemon/PokemonContext';
import PropTypes from 'prop-types';
import { FaSearch, FaPlus } from 'react-icons/fa';

import Button from '../common/Button';

const PokemonOptions = ({ setFormVisible }) => {
  const [text, setText] = useState('');
  const { dispatch, pokemon, filteredPokemon } = useContext(PokemonContext);

  const handleSearchChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredPokemons = pokemon.filter(
      (p) => p.name.toLowerCase() === text.toLowerCase()
    );
    dispatch({ type: 'SEARCH_POKEMON', payload: filteredPokemons });
    setText('');
  };

  return (
    <div className='pokemon-options'>
      <form onSubmit={handleSubmit} className='pokemon-form'>
        <input
          value={text}
          onChange={handleSearchChange}
          className='pokemon-search'
          type='text'
          placeholder='Buscar'
        />
        <FaSearch id='search' className='input-icon' />
      </form>

      <Button
        action={() => {
          setFormVisible(true);
        }}
        label='Nuevo'
        icon={<FaPlus className='action-icon' />}
      />

      {filteredPokemon.length > 0 && (
        <Button
          action={() => dispatch({ type: 'CLEAR_SEARCH' })}
          label='Limpiar filtros'
        />
      )}
    </div>
  );
};

PokemonOptions.propTypes = {
  setFormVisible: PropTypes.func.isRequired,
};

export default PokemonOptions;
