import React from 'react'
import { Result } from '../types/types'
import { PokemonReadyForCombatCard } from './pokemonReadyForCombatCard'
import { commonSelector } from '../redux/features/commonSlice'
import { useSelector } from 'react-redux'

export const PokemonReadyForCombatList = () => {
  const { pokemonReadyForCombatList } = useSelector(commonSelector)

  return (
    <section className=' flex flex-wrap pt-9  justify-center'>
      {pokemonReadyForCombatList?.length === 0 ? (
        <p className='text-center w-full'>Lista vacía, no hay ningún pokemón listo</p>
      ) : (
        pokemonReadyForCombatList &&
        pokemonReadyForCombatList?.map(({ name, url }: Result) => (
          <PokemonReadyForCombatCard key={`pokemon-combat-card-${name}`} name={name} url={url} />
        ))
      )}
    </section>
  )
}
