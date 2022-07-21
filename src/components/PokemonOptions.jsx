import PropTypes from 'prop-types';
import { FaSearch, FaPlus } from 'react-icons/fa';

import Button from '../common/Button';

const PokemonOptions = ({ setFormVisible }) => {
  return (
    <div className='pokemon-options'>
      <form className='pokemon-form'>
        <input className='pokemon-search' type='text' placeholder='Buscar' />
        <FaSearch id='search' className='input-icon' />
      </form>

      <Button
        action={async () => {
          await setFormVisible(true);
          document
            .getElementById('pokemonForm')
            .scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
        label='Nuevo'
        icon={<FaPlus className='action-icon' />}
      />
    </div>
  );
};

PokemonOptions.propTypes = {
  setFormVisible: PropTypes.func.isRequired,
};

export default PokemonOptions;
