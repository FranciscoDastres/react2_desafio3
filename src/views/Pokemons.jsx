import { useContext } from 'react'
import { PokemonsContext } from '../context/PokemonsContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import "../views/Pokemons.css"
import {Badge} from 'react-bootstrap';

const Pokemons = () => {
  const { pokemons, selectedPokemon, setSelectedPokemon } = 
     useContext(PokemonsContext)
  const navigate = useNavigate()

  const goToDetails = () => {
    if (selectedPokemon) {
      navigate(`/pokemons/${selectedPokemon}`)
    } else {
      Swal.fire('Selecciona un Pokemon')
    }
  }

  return (
    <div className="pokemons">
      <h1>Select a Pokemon </h1>
      <section>
        <select
          className="pokemonsSelect"
          value={selectedPokemon}
          onChange={({ target }) => setSelectedPokemon(target.value)}
        >
          <option value=" " 
          disabled
          >
            Select a Pokemon
          </option>
          {pokemons.map(({ name }) =>(
              <option key={name} value={name}>
                {name}
              </option>
            )
          )}
        </select>
        <article>
          <button className="mt-5 bg-danger btnError" onClick={goToDetails}>
            View Details
          </button>
        </article>
      </section>
    </div>
  )
}

export default Pokemons
