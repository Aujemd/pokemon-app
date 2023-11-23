import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CommonState } from './types'

export const initialState: CommonState = {
  pokemonList: []
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setPokemonList(state, { payload }: PayloadAction<CommonState['pokemonList']>) {
      state.pokemonList = payload
    }
  }
})

export const { setPokemonList } = commonSlice.actions

export default commonSlice.reducer

export const commonSelector = (state: { common: CommonState }) => state.common
