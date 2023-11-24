import { useQuery } from 'react-query'
import { fetchPokemon } from '../services/pokemon.service'
import { useDispatch } from 'react-redux'
import {
  addPokemonReadyForCombat as addPokemonReadyForCombatAction,
  removePokemonReadyForCombat as removePokemoReadyForCombatAction
} from '../redux/features/commonSlice'
import { Result } from '../types/types'

export const usePokemonData = (url: string) => {
  const { data, isLoading } = useQuery(['pokemonData', url], () => fetchPokemon(url))

  const dispatch = useDispatch()

  const addPokemonReadyForCombat = (pokemon?: Result) => {
    if (!pokemon) return
    dispatch(addPokemonReadyForCombatAction(pokemon))
  }

  const removePokemonReadyForCombat = (pokemon?: Result) => {
    if (!pokemon) return
    dispatch(removePokemoReadyForCombatAction(pokemon))
  }
  return { data, addPokemonReadyForCombat, removePokemonReadyForCombat, isLoading }
}
