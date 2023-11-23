import { fetchPokemonList } from '../services/pokemon.service'
import { useInfiniteQuery } from 'react-query'

const FETCH_LIMIT = process.env.REACT_APP_FETCH_LIMIT

export const usePokemonList = () => {
  return useInfiniteQuery('pokemonList', ({ pageParam = 0 }) => fetchPokemonList(pageParam), {
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        const url = new URL(lastPage.next)

        const offset = url.searchParams.get('offset')

        return offset && parseInt(offset) < parseInt(FETCH_LIMIT || '150') ? offset : undefined
      }
      return undefined
    }
  })
}
