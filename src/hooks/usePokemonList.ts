import { fetchPokemonList } from '../services/pokemon.service'
import { useInfiniteQuery } from 'react-query'
import { useFetchNextPage } from './useFetchNextPage'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPokemonList } from '../redux/features/commonSlice'

const FETCH_LIMIT = process.env.REACT_APP_FETCH_LIMIT

export const usePokemonList = () => {

  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    'pokemonList',
    ({ pageParam = 0 }) => fetchPokemonList(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.next) {
          const url = new URL(lastPage.next)

          const offset = url.searchParams.get('offset')

          return offset && parseInt(offset) < parseInt(FETCH_LIMIT || '150') ? offset : undefined
        }
        return undefined
      }
    }
  )

  const dispatch = useDispatch()

  useFetchNextPage(hasNextPage, fetchNextPage)

  useEffect(() => {
    if (!isLoading) {
      const pokemonList = data?.pages.map((page) => page.results).flat()

      dispatch(setPokemonList(pokemonList))
    }
  }, [data?.pages, dispatch, isLoading])

  return { isLoading }
}
