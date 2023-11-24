import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CommonState } from './types'
import { Result } from '../../types/types'

export const initialState: CommonState = {
  pokemonList: [],
  pokemonReadyForCombatList: [],
  pokemonQuery: ''
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setPokemonList(state, { payload }: PayloadAction<CommonState['pokemonList']>) {
      state.pokemonList = payload
    },
    addPokemonReadyForCombat(state, { payload }: PayloadAction<Result>) {
      if (
        !state.pokemonReadyForCombatList?.find(({ name }: Result) => name === payload.name) &&
        state.pokemonReadyForCombatList &&
        state.pokemonReadyForCombatList?.length < 6
      ) {
        state.pokemonReadyForCombatList?.push(payload)
      }
    },
    removePokemonReadyForCombat(state, { payload }: PayloadAction<Result>) {
      state.pokemonReadyForCombatList = state.pokemonReadyForCombatList?.filter(
        ({ name }: Result) => name !== payload.name
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
