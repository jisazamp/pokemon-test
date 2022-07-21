import { useState, useEffect } from 'react';

import PokemonOptions from '../components/PokemonOptions';
import PokemonTable from '../components/PokemonTable';
import PokemonForm from '../components/PokemonForm';

const Home = () => {
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    if (formVisible)
      document
        .getElementById('pokemonForm')
        .scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [formVisible]);

  return (
    <main className='container'>
      <p>Listado de Pokemon</p>

      <PokemonOptions setFormVisible={setFormVisible} />

      <PokemonTable setFormVisible={setFormVisible} />

      {formVisible && <PokemonForm setFormVisible={setFormVisible} />}
    </main>
  );
};

export default Home;
