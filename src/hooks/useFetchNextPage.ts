// Import necessary types from react-query and types/types
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query'
import { useEffect } from 'react'
import { PokemonListResponse } from '../types/types'

/**
 * Custom hook to handle fetching the next page in an infinite list.
 * @param hasNextPage - Indicates whether there is a next page available.
 * @param callBack - Callback function to load the next page.
 */
export const useFetchNextPage = (
  hasNextPage: boolean | undefined,
  callBack: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<PokemonListResponse, unknown>>
) => {
  useEffect(() => {
    // Variable indicating if a fetch request is in progress.
    let fetching = false

    // Function to handle the scroll event.
    const handleScroll = async (e: any) => {
      // Get information about the scroll.
      const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement

      // Check if the next page should be loaded.
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
        fetching = true
        // Call the callback function to load the next page.
        if (hasNextPage) await callBack()
        fetching = false
      }
    }

    // Add an event listener for the scroll event.
    document.addEventListener('scroll', handleScroll)

    // Clean up the scroll event listener when the component unmounts.
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [callBack, hasNextPage]) // Effect depends on the callback function and the indication of the next page.
}
