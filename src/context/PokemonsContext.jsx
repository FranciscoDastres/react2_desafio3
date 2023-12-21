import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const PokemonsContext = createContext(); 

const urlPoke = 'https://pokeapi.co/api/v2/pokemon?limit=50'

const PokemonsProvider = ({ children }) =>{
    const [pokemons, setPokemos] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState('');

    const getPokemos = async () => {
        try{
          const response = await axios.get(urlPoke);
          if (!response.status) {
            throw new Error('Data not found');
          }
          setPokemos(response.data.results);
          console.log(response.data)
        }catch (error){
          console.log(error.message)
        }
    }

    useEffect(() => {
        getPokemos();
    }, []);
    
 return (
    <PokemonsContext.Provider
      value={{
        pokemons,
        setPokemos,
        selectedPokemon,
        setSelectedPokemon,
     }}
    >
    {children}
    </PokemonsContext.Provider>
 );
};

export default PokemonsProvider;