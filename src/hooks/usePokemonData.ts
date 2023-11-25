// Import necessary modules and hooks from external libraries
import { useQuery } from 'react-query'
import { fetchPokemon } from '../services/pokemon.service'
import { useDispatch } from 'react-redux'
import {
  addPokemonReadyForCombat as addPokemonReadyForCombatAction,
  removePokemonReadyForCombat as removePokemonReadyForCombatAction
} from '../redux/features/commonSlice'
import { Result } from '../types/types'

/**
 * Custom hook to fetch Pokemon data and manage related state.
 * @param url - The URL used as a key for the query and to fetch Pokemon data.
 * @returns An object containing Pokemon data, functions to add and remove Pokemon ready for combat, and a loading indicator.
 */
export const usePokemonData = (url: string) => {
  // Use the 'useQuery' hook from react-query to fetch Pokemon data.
  const { data, isLoading } = useQuery(['pokemonData', url], () => fetchPokemon(url))

  // Get the Redux dispatch function.
  const dispatch = useDispatch()

  /**
   * Function to add a Pokemon to the list of Pokemon ready for combat.
   * @param pokemon - The Pokemon to be added.
   */
  const addPokemonReadyForCombat = (pokemon?: Result) => {
    // Check if a valid Pokemon object is provided before dispatching the action.
    if (!pokemon) return
    dispatch(addPokemonReadyForCombatAction(pokemon))
  }

  /**
   * Function to remove a Pokemon from the list of Pokemon ready for combat.
   * @param pokemon - The Pokemon to be removed.
   */
  const removePokemonReadyForCombat = (pokemon?: Result) => {
    // Check if a valid Pokemon object is provided before dispatching the action.
    if (!pokemon) return
    dispatch(removePokemonReadyForCombatAction(pokemon))
  }

  // Return an object with the fetched Pokemon data, add and remove functions, and the loading indicator.
  return { data, addPokemonReadyForCombat, removePokemonReadyForCombat, isLoading }
}
