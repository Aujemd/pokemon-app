import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CommonState } from './types'

export const initialState: CommonState = {
  pokemonList: [],
  pokemonReadyForCombat: [],
  pokemonQuery: ''
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setPokemonList(state, { payload }: PayloadAction<CommonState['pokemonList']>) {
      state.pokemonList = payload
    },
    addPokemonReadyForCombat(state, { payload }: PayloadAction<string>) {
      if (
        !state.pokemonReadyForCombat?.includes(payload) &&
        state.pokemonReadyForCombat &&
        state.pokemonReadyForCombat?.length < 6
      ) {
        state.pokemonReadyForCombat?.push(payload)
      }
    },
    removePokemonReadyForCombat(state, { payload }: PayloadAction<string>) {
      state.pokemonReadyForCombat = state.pokemonReadyForCombat?.filter(
        (pokemon) => pokemon !== payload
      )
    },
    setPokemonQuery(state, { payload }: PayloadAction<string>) {
      state.pokemonQuery = payload
    }
  }
})

export const {
  setPokemonList,
  addPokemonReadyForCombat,
  removePokemonReadyForCombat,
  setPokemonQuery
} = commonSlice.actions

export default commonSlice.reducer

export const commonSelector = (state: { common: CommonState }) => state.common
