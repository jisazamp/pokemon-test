import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTimes, FaSave } from 'react-icons/fa';

import Button from '../common/Button';

const PokemonForm = ({ setFormVisible }) => {
  const [pokemon, setPokemon] = useState({
    name: '',
    image: '',
    attack: '10',
    defense: '10',
  });

  const { name, image, attack, defense } = pokemon;

  const handleInputChange = (e) => {
    setPokemon({ ...pokemon, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    setFormVisible(false);
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
            type='submit'
            label='Guardar'
            icon={<FaSave className='action-icon' />}
          />
          <Button
            action={() => setFormVisible(false)}
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
