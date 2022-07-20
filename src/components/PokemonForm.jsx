import PropTypes from 'prop-types';
import { FaTimes, FaSave } from 'react-icons/fa';

import Button from '../common/Button';

const PokemonForm = ({ setFormVisible }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    setFormVisible(false);
  };

  return (
    <div className='card'>
      <form onSubmit={handleSubmit} className='new-pokemon'>
        <p>Nuevo Pokemon</p>

        <div>
          <label htmlFor='name'></label>
          <input id='name' type='text' placeholder='Nombre' />
        </div>

        <div>
          <label htmlFor='image'></label>
          <input id='image' type='text' placeholder='url' />
        </div>

        <div>
          <label htmlFor='attack'></label>
          <input type='range' min='0' max='100' id='attack' />
        </div>

        <div>
          <label htmlFor='defense'></label>
          <input type='range' min='0' max='100' id='defense' />
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
