import { Link, useLocation } from 'react-router-dom'
import { usePokemonData } from '../hooks/usePokemonData'
import { Stat, Type } from '../types/types'
import { commonSelector } from '../redux/features/commonSlice'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'

export const PokemonDetail = () => {
  let {
    state: { url }
  } = useLocation()

  const { data, addPokemonReadyForCombat, removePokemonReadyForCombat } = usePokemonData(url)

  const { pokemonReadyForCombat } = useSelector(commonSelector)

  const isOnList = useMemo(
    () => pokemonReadyForCombat?.find((pokemonName) => pokemonName === data?.name),
    [data?.name, pokemonReadyForCombat]
  )

  return (
    <section className='w-3/4 flex justify-around items-start  mt-10'>
      <Link to='/' className=' '>
        Volver
      </Link>
      <div className=' bg-gray-100 flex flex-col  justify-center items-center p-8 rounded-md'>
        <figure className=' w-60'>
          <img
            src={data?.sprites?.other?.['official-artwork']?.front_default}
            alt='pokemon-pic'
            className='w-full'
          />
        </figure>

        <h1 className=' capitalize  font-bold  text-center text-2xl'>{data?.name}</h1>
        <div className=' flex  gap-10'>
          <div>
            <p>{`ID: ${data?.id}`}</p>
            <p>{`Height: ${data?.height}`}</p>
            <div className=' flex'>
              <p className=' mr-1'>Types:</p>
              {data?.types?.map((type: Type) => (
                <p key={type.type?.name} className='capitalize'>
                  {type.type?.name}
                </p>
              ))}
            </div>
          </div>

          <div>
            {data?.stats?.map(({ base_stat, stat }: Stat) => (
              <p key={stat?.name} className=' capitalize'>{`${stat?.name} : ${base_stat}`}</p>
            ))}
          </div>
        </div>
      </div>
      <button
        className={`${isOnList ? 'bg-red-500' : 'bg-teal-700'} text-white py-1 px-3 rounded-md`}
        onClick={() =>
          isOnList
            ? removePokemonReadyForCombat(data?.name || '')
            : addPokemonReadyForCombat(data?.name || '')
        }
      >
        {isOnList ? '🗑️ Remover' : '+ Agregar'}
      </button>
    </section>
  )
}
