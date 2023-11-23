import React from 'react'
import { Result } from '../types/types'
import { PokemonCard } from './pokemonCard'
import { useSelector } from 'react-redux'
import { commonSelector } from '../redux/features/commonSlice'

export const PokemonList = () => {
  const { pokemonList } = useSelector(commonSelector)

  return (
    <div className='flex flex-wrap gap-4 justify-center mt-32'>
      {pokemonList?.map(({ name, url }: Result) => (
        <PokemonCard key={`pokemon-card-${name}`} name={name} url={url} />
      ))}
    </div>
  )
}
