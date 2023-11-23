import { useDispatch } from 'react-redux'
import { setPokemonQuery } from '../redux/features/commonSlice'
export const useSearch = () => {
  const dispatch = useDispatch()

  let filterTimeout: string | number | NodeJS.Timeout | undefined

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    clearTimeout(filterTimeout)
    filterTimeout = setTimeout(() => {
      dispatch(setPokemonQuery(query))
    }, 500)
  }

  return { handleSearch }
}
