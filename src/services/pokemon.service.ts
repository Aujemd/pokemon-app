import { PokemonListResponse, PokemonResponse } from '../types/types'
import { getHeaders } from '../utils/headers.utils'

const API_URL = process.env.REACT_APP_API_URL
const FETCH_BY = process.env.REACT_APP_FETCH_BY

export const fetchPokemonList = async (offset: string): Promise<PokemonListResponse> => {
  return fetch(`${API_URL}/pokemon?limit=${FETCH_BY}&offset=${offset}`, {
    method: 'GET',
    headers: getHeaders()
  })
    .then((res) => res.json())
    .then((data) => data)
}

export const fetchPokemon = async (url: string): Promise<PokemonResponse> => {
  return fetch(url, {
    method: 'GET',
    headers: getHeaders()
  })
    .then((res) => res.json())
    .then((data) => data)
}
