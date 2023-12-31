import { PokemonReadyForCombatList } from "./pokemonReadyForCombatList"

export const PokemonReadyForCombat = () => {
  return (
    <aside className=' w-1/4 fixed right-0 bg-gray-100 top-0 h-screen'>
      <h1 className=' text-center font-bold text-lg uppercase mt-10 w-3/4 mx-auto'>Listos Para El Combate</h1>
      <PokemonReadyForCombatList />
    </aside>
  )
}
