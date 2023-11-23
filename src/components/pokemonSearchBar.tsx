import { useSearch } from '../hooks/useSearch'

export const PokemonSearchBar = () => {
  const { handleSearch } = useSearch()
  return (
    <section className=' flex justify-center py-8 '>
      <input
        onChange={handleSearch}
        type='text'
        placeholder='Que pokémon buscas...'
        className=' p-5  w-1/2 rounded-md bg-gray-100 border'
      />
    </section>
  )
}
