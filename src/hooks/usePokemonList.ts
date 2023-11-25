// Import necessary modules and hooks from external libraries
import { fetchPokemonList } from '../services/pokemon.service'
import { useInfiniteQuery } from 'react-query'
import { useFetchNextPage } from './useFetchNextPage'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPokemonList } from '../redux/features/commonSlice'

// Define the fetch limit for the Pokemon list.
const FETCH_LIMIT = process.env.REACT_APP_FETCH_LIMIT

/**
 * Custom hook to fetch and manage a list of Pokemon using infinite query.
 * @returns An object containing the Pokemon list loading indicator.
 */
export const usePokemonList = () => {
  // Use the 'useInfiniteQuery' hook from react-query to fetch the Pokemon list.
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    'pokemonList',
    // Function to fetch the Pokemon list for a specific page.
    ({ pageParam = 0 }) => fetchPokemonList(pageParam),
    {
      // Function to get the next page parameter based on the last page.
      getNextPageParam: (lastPage) => {
        if (lastPage.next) {
          const url = new URL(lastPage.next)

          // Extract the 'offset' from the next page URL.
          const offset = url.searchParams.get('offset')

          // Return the offset if it's within the fetch limit, otherwise, return undefined.
          return offset && parseInt(offset) < parseInt(FETCH_LIMIT || '150') ? offset : undefined
        }
        return undefined
      }
    }
  )

  // Get the Redux dispatch function.
  const dispatch = useDispatch()

  // Use the custom 'useFetchNextPage' hook to handle fetching the next page.
  useFetchNextPage(hasNextPage, fetchNextPage)

  // Update the Redux store with the Pokemon list when data is available and not loading.
  useEffect(() => {
    if (!isLoading) {
      const pokemonList = data?.pages.map((page) => page.results).flat()

      // Dispatch the action to set the Pokemon list in the Redux store.
      dispatch(setPokemonList(pokemonList))
    }
  }, [data?.pages, dispatch, isLoading])

  // Return an object with the loading indicator for the Pokemon list.
  return { isLoading }
}
