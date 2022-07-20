import { useState } from 'react';

import PokemonOptions from '../components/PokemonOptions';
import PokemonTable from '../components/PokemonTable';
import PokemonForm from '../components/PokemonForm';

const Home = () => {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <main className='container'>
      <p>Listado de Pokemon</p>

      <PokemonOptions setFormVisible={setFormVisible} />

      <PokemonTable />

      {formVisible && <PokemonForm setFormVisible={setFormVisible} />}
    </main>
  );
};

export default Home;
