import React from 'react'
import { Result } from '../types/types'
import { usePokemonData } from '../hooks/usePokemonData'

export const PokemonReadyForCombatCard = ({ name = '', url = '' }: Result) => {
  const { data, removePokemonReadyForCombat } = usePokemonData(url)

  return (
    <article className='flex flex-col justify-center items-center  p-2  relative  '>
      <span
        className='absolute top-0 right-1 cursor-pointer z-50'
        onClick={() => removePokemonReadyForCombat({ name, url })}
      >
        🗑️
      </span>
      <picture>
        <img
          src={data?.sprites?.front_default}
          alt='pokemon-ready-for-combat-pic'
          className='animate-bounce '
        />
      </picture>
      <p className=' text-[10px] font-bold  capitalize'>{name}</p>
    </article>
  )
}
