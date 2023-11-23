import { usePokemonList } from '../hooks/usePokemonList'
import { PokemonList } from '../components/pokemonList'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setPokemonList } from '../redux/features/commonSlice'
import { useFetchNextPage } from '../hooks/useFetchNextPage'

export const Home = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = usePokemonList()

  const dispatch = useDispatch()

  useEffect(() => {

    if (!isLoading) {
      const pokemonList = data?.pages.map((page) => page.results).flat()

      dispatch(setPokemonList(pokemonList))
    }
  }, [data?.pages, dispatch, isLoading])

  useFetchNextPage(hasNextPage, fetchNextPage)

  return (
    <>
      <section>{isLoading ? 'cargando ' : <PokemonList />}</section>
    </>
  )
}
