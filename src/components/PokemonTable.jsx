const PokemonTable = () => {
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
          <tr>
            <td scope='row'>Ivysaur</td>
            <td>Imagen</td>
            <td>65</td>
            <td>38</td>
            <td>Editar borrar</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PokemonTable;
