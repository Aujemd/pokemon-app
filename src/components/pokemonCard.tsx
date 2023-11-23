import { usePokemonData } from '../hooks/usePokemonData'
import { Result } from '../lib/types'

export const PokemonCard = ({ name = '', url = '' }: Result) => {
  const { data } = usePokemonData(url)

  return (
    <article className=' bg-gray-100 w-1/5 rounded-md p-4  transition-all hover:scale-105  hover:shadow-lg'>
      <figure>
        <img src={data?.sprites?.other?.['official-artwork']?.front_default} alt='pokemon-pic' />
      </figure>
      <p className='text-center font-bold capitalize mt-6'>{name}</p>
    </article>
  )
}
