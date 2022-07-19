const Home = () => {
  return (
    <div>
      <p>Listado de Pokemon</p>

      <div>
        <form>
          <input type='text' placeholder='Buscar' />
        </form>

        <button>Nuevo</button>
      </div>

      <table>
        <thead>
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

      <div>
        <form>
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
            <input type='range' min='0' max='100' class='slider' id='attack' />
          </div>

          <div>
            <label htmlFor='defense'></label>
            <input type='range' min='0' max='100' class='slider' id='defense' />
          </div>

          <div>
            <button>Guardar</button>
            <button>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
