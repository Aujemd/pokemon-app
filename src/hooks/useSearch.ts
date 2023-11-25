// Import necessary modules and hooks from external libraries
import { useDispatch } from 'react-redux'
import { setPokemonQuery } from '../redux/features/commonSlice'

/**
 * Custom hook to handle Pokemon search functionality.
 * @returns An object containing the function to handle search input changes.
 */
export const useSearch = () => {
  // Get the Redux dispatch function.
  const dispatch = useDispatch()

  // Variable to store the timeout for filtering to debounce the search input.
  let filterTimeout: string | number | NodeJS.Timeout | undefined

  /**
   * Function to handle search input changes and dispatch the search query to Redux.
   * @param e - The change event object from the search input.
   */
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get the search query from the input.
    const query = e.target.value

    // Clear the previous timeout to debounce the search input.
    clearTimeout(filterTimeout)

    // Set a new timeout to dispatch the search query after a delay of 500 milliseconds.
    filterTimeout = setTimeout(() => {
      dispatch(setPokemonQuery(query))
    }, 500)
  }

  // Return an object with the function to handle search input changes.
  return { handleSearch }
}
