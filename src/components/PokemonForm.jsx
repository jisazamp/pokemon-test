import { useState, useContext, useEffect } from 'react';
import PokemonContext from '../context/pokemon/PokemonContext';
import { addPokemon, editPokemonData } from '../context/pokemon/PokemonActions';
import PropTypes from 'prop-types';
import { FaTimes, FaSave } from 'react-icons/fa';
import Button from '../common/Button';

const PokemonForm = ({ setFormVisible }) => {
  const [pokemon, setPokemon] = useState({
    name: '',
    image: '',
    attack: '10',
    defense: '10',
    hp: 100,
    type: 'fire',
    idAuthor: 1,
  });
  const { name, image, attack, defense } = pokemon;
  const { dispatch, editPokemon } = useContext(PokemonContext);

  useEffect(() => {
    if (Object.keys(editPokemon).length > 0) {
      setPokemon({ ...editPokemon, idAuthor: 1 });
    }
  }, [editPokemon]);

  const handleInputChange = async (e) => {
    setPokemon({ ...pokemon, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.length < 2 || image.length === 0)
      return console.error('Debe proveer un nombre y una imagen');

    if (Object.keys(editPokemon).length > 0) {
      const data = await editPokemonData(pokemon);
      dispatch({ type: 'EDIT_POKEMON', payload: data });
    } else {
      const addPokemonData = async (pokemon) => {
        const response = await addPokemon(pokemon);
        dispatch({ type: 'ADD_POKEMON', payload: response });
      };

      await addPokemonData(pokemon);
    }

    setFormVisible(false);
    setPokemon({
      name: '',
      image: '',
      attack: '10',
      defense: '10',
      hp: 100,
      type: 'fire',
      idAuthor: 1,
    });
  };

  return (
    <div id='pokemonForm' className='card'>
      <form onSubmit={handleSubmit} className='new-pokemon'>
        <p>Nuevo Pokemon</p>

        <div className='input-group'>
          <label htmlFor='name'>Nombre</label>
          <input
            value={name}
            onChange={handleInputChange}
            id='name'
            type='text'
            placeholder='Nombre'
          />
        </div>

        <div id='image' className='input-group'>
          <label htmlFor='image'>Imagen</label>
          <input
            value={image}
            onChange={handleInputChange}
            id='image'
            type='text'
            placeholder='url'
          />
        </div>

        <div className='input-group'>
          <label htmlFor='attack'>
            Ataque <span>{attack}</span>
          </label>
          <div className='range-group'>
            <span>0</span>
            <input
              value={attack}
              onChange={handleInputChange}
              className='slider'
              type='range'
              min='0'
              max='100'
              step='1'
              id='attack'
            />
            <span>100</span>
          </div>
        </div>

        <div className='input-group'>
          <label htmlFor='defense'>
            Defensa <span>{defense}</span>
          </label>
          <div className='range-group'>
            <span>0</span>
            <input
              value={defense}
              onChange={handleInputChange}
              className='slider'
              type='range'
              min='0'
              max='100'
              step='1'
              id='defense'
            />
            <span>100</span>
          </div>
        </div>

        <div className='btn-group'>
          <Button
            disabled={name.length < 2 || image.length === 0}
            type='submit'
            label={Object.keys(editPokemon).length > 0 ? 'Editar' : 'Guardar'}
            icon={<FaSave className='action-icon' />}
          />
          <Button
            action={() => {
              setFormVisible(false);
              dispatch({ type: 'SET_EDIT_POKEMON', payload: {} });
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            label='Cancelar'
            icon={<FaTimes className='action-icon' />}
          />
        </div>
      </form>
    </div>
  );
};

PokemonForm.propTypes = {
  setFormVisible: PropTypes.func.isRequired,
};

export default PokemonForm;
