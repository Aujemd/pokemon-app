import { useQuery } from 'react-query'
import { fetchPokemon } from '../services/pokemon.service'
import { useDispatch } from 'react-redux'
import {
  addPokemonReadyForCombat as addPokemonReadyForCombatAction,
  removePokemonReadyForCombat as removePokemoReadyForCombatAction
} from '../redux/features/commonSlice'

export const usePokemonData = (url: string) => {
  const { data } = useQuery(['pokemonData', url], () => fetchPokemon(url))

  const dispatch = useDispatch()

  const addPokemonReadyForCombat = (name: string) => {
    dispatch(addPokemonReadyForCombatAction(name))
  }

  const removePokemonReadyForCombat = (name: string) => {
    dispatch(removePokemoReadyForCombatAction(name))
  }
  return { data, addPokemonReadyForCombat, removePokemonReadyForCombat }
}
