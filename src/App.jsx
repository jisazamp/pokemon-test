import Home from './pages/Home';
import { PokemonProvider } from './context/pokemon/PokemonContext';

const App = () => {
  return (
    <>
      <PokemonProvider>
        <Home />
      </PokemonProvider>
    </>
  );
};

export default App;
