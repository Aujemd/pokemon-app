import React from 'react'
import { Result } from '../lib/types'
import { PokemonCard } from './pokemonCard'
import { useSelector } from 'react-redux'
export const PokemonList = () => {
  const results = useSelector((state: any) => state.common.pokemonList)

  return (
    <section className='flex flex-wrap gap-4  justify-center  w-full'>
      {results?.map(({ name, url }: Result) => (
        <PokemonCard key={`pokemon-card-${name}`} name={name} url={url} />
      ))}
    </section>
  )
}
