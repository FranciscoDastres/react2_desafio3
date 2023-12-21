import { Route, Routes as R } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './views/Home'
import Pokemons from './views/Pokemons'
import PokemonDetails from './views/PokemonDetails'
// Import NotFound

const App = () => {
  return (
    <>
      <div className='container'>
        <Navigation />
        <R>
          <Route
          path="/"
          element={<Home />}>
          </Route>
          <Route
          path="/pokemons"
          element={<Pokemons />}>
          </Route>
          <Route
          path="/pokemons/:name"
          element={<PokemonDetails />}>
          </Route>
          {/* <Route
          path="*"
          element={<NoutFound />}>
          </Route> */}
        </R>
      </div>
    </>
  )
}

export default App