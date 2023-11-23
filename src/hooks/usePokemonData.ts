import { useQuery } from 'react-query'
import { fetchPokemon } from '../services/pokemon.service'

export const usePokemonData = (url: string) => {
  return useQuery(['pokemonData', url], () => fetchPokemon(url))
}
