import { useSelector } from 'react-redux'
import { usePokemonData } from '../hooks/usePokemonData'
import { Result } from '../types/types'
import { commonSelector } from '../redux/features/commonSlice'
import { useMemo } from 'react'
export const PokemonCard = ({ name = '', url = '' }: Result) => {
  const { data, addPokemonReadyForCombat } = usePokemonData(url)
  const { pokemonQuery } = useSelector(commonSelector)


  const showCard = useMemo(
    () => name.includes(pokemonQuery || '') || parseInt(pokemonQuery || '') === data?.id,
    [data?.id, name, pokemonQuery]
  )

  if (pokemonQuery !== '' && !showCard) {
    return null
  }

  return (
    <article className=' bg-gray-100 w-1/5 rounded-md p-4  transition-all hover:scale-105 hover:shadow-lg relative'>
      <span
        className='absolute top-2 right-2 flex h-4 w-4 cursor-pointer'
        onClick={() => addPokemonReadyForCombat(name)}
      >
        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-700 opacity-75'></span>
        <span className='relative inline-flex rounded-full h-4 w-4 bg-teal-700 text-white text-[10px] justify-center items-center'>
          +
        </span>
      </span>
      <figure>
        <img src={data?.sprites?.other?.['official-artwork']?.front_default} alt='pokemon-pic' />
      </figure>
      <p className='text-center font-bold capitalize mt-6'>{name}</p>
    </article>
  )
}
