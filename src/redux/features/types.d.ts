export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type CommonState = {
  pokemonList?: Array<Result>
  pokemonReadyForCombat?: Array<string>
  pokemonQuery?: string
}
