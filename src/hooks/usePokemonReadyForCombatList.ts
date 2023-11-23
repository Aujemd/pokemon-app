import { useSelector } from 'react-redux'
import { commonSelector } from '../redux/features/commonSlice'
import { useMemo } from 'react'
import { Result } from '../types/types'

export const usePokemonReadyForCombatList = () => {
  const { pokemonReadyForCombat, pokemonList } = useSelector(commonSelector)

  const pokemonReadyForCombatList = useMemo(
    () =>
      pokemonReadyForCombat?.map(
        (pokemon: string) =>
          pokemonList?.find((pokemonItem: Result) => pokemonItem.name === pokemon)
      ),

    [pokemonList, pokemonReadyForCombat]
  )
  return { pokemonReadyForCombatList }
}
