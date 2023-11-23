import React from 'react'
import { usePokemonReadyForCombatList } from '../hooks/usePokemonReadyForCombatList'
import { Result } from '../types/types'
import { PokemonReadyForCombarCard } from './pokemonReadyForCombarCard'

export const PokemonReadytForCombatList = () => {
  const { pokemonReadyForCombatList } = usePokemonReadyForCombatList()

  return (
    <section className=' flex flex-wrap justify-center pt-9'>
      {pokemonReadyForCombatList?.length === 0 ? (
        <p className='text-center w-full'>Lista vacía, no hay ningún pokemón listo</p>
      ) : (
        pokemonReadyForCombatList?.map(({ name, url }: Result) => (
          <PokemonReadyForCombarCard name={name} url={url} />
        ))
      )}
    </section>
  )
}
