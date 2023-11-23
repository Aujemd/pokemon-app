import { usePokemonList } from '../hooks/usePokemonList'
import { PokemonList } from '../components/pokemonList'
import { PokemonSearchBar } from '../components/pokemonSearchBar'

export const Home = () => {
  const { isLoading } = usePokemonList()

  return (
    <>
      {isLoading ? (
        'cargando '
      ) : (
        <section className=' flex flex-col w-3/4 relative  bg-gray-100ß'>
          <div className='   z-50 w-3/4 fixed top-0 '>
            <PokemonSearchBar />
          </div>
          <PokemonList />
        </section>
      )}
    </>
  )
}
