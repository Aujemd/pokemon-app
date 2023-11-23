import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Home } from '../pages/home'
import { PokemonReadyForCombat } from '../components/pokemonReadyForCombat'

export const router = createBrowserRouter([
  {
    element: (
      <>
        <div className='flex  flex-nowrap'>
          <Outlet />
          <PokemonReadyForCombat />
        </div>
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])
