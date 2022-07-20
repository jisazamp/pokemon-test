import { useContext, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import PokemonContext from '../context/pokemon/PokemonContext';
import { getPokemon } from '../context/pokemon/PokemonActions';

const PokemonTable = () => {
  const { pokemon, loading, dispatch } = useContext(PokemonContext);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    getPokemonData();
  }, []);

  const getPokemonData = async () => {
    const pokemonData = await getPokemon();
    dispatch({ type: 'GET_POKEMON', payload: pokemonData });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='pokemon-table'>
      <table className='table'>
        <thead className='table-head'>
          <tr>
            <th scope='col'>Nombre</th>
            <th scope='col'>Imagen</th>
            <th scope='col'>Ataque</th>
            <th scope='col'>Defensa</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pokemon?.map((p) => (
            <tr key={p.id}>
              <td scope='row'>{p.name}</td>
              <td style={{ textAlign: 'center' }}>
                <img src={p.image} alt='Pokemon' width='96px' height='auto' />
              </td>
              <td>{p.attack}</td>
              <td>{p.defense}</td>
              <td>
                <div className='pokemon-actions'>
                  <FaEdit />
                  <FaTrash />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonTable;
