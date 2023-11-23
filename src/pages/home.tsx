import { usePokemonList } from '../hooks/usePokemonList'
import { PokemonList } from '../components/pokemonList'

export const Home = () => {
  const { isLoading } = usePokemonList()

  return <>{isLoading ? 'cargando ' : <PokemonList />}</>
}
