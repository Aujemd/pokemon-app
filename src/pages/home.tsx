import { usePokemonList } from '../hooks/usePokemonList'
import { PokemonList } from '../components/pokemonList'
import { PokemonSearchBar } from '../components/pokemonSearchBar'
import { Loader } from '../components/loader'
export const Home = () => {
  const { isLoading } = usePokemonList()

  return (
    <>
      {isLoading ? (
        <div className=' w-3/4 flex justify-center items-center h-screen'>
          <Loader />
        </div>
      ) : (
        <section className=' flex flex-col w-3/4 relative' style={{ height: 'calc(100vh + 10px)' }}>
          <div className='z-50 w-3/4 fixed top-0 bg-gray-100 '>
            <PokemonSearchBar />
          </div>
          <PokemonList />
        </section>
      )}
    </>
  )
}
