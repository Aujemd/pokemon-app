import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Home } from '../pages/home'

export const router = createBrowserRouter([
  {
    element: (
      <>
        <Outlet />
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
