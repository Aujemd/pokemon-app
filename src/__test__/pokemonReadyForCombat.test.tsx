// PokemonReadyForCombatCard.test.tsx

import React from 'react'
import { render } from './utils'

import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PokemonReadyForCombatCard } from '../components/pokemonReadyForCombatCard'
import { usePokemonData } from '../hooks/usePokemonData'

// Usa el jest.mock de esta manera en TypeScript
jest.mock('../hooks/usePokemonData', () => ({
  ...jest.requireActual('../hooks/usePokemonData'), // Preserva la implementación real del módulo si es necesario
  usePokemonData: jest.fn()
}))

describe('PokemonReadyForCombatCard', () => {
  it('renders with correct data', () => {
    const pokemonData = {
      name: 'Pikachu',
      url: 'pokemon-url'
    }

    // Configura el comportamiento del mock
    ;(usePokemonData as jest.Mock).mockReturnValue({
      data: {
        sprites: {
          front_default: 'mocked-image-url'
        }
      },
      removePokemonReadyForCombat: jest.fn()
    })

    render(<PokemonReadyForCombatCard {...pokemonData} />)

    // Assert
    expect(screen.getByAltText('pokemon-ready-for-combat-pic')).toBeInTheDocument()
    expect(screen.getByText('Pikachu')).toBeInTheDocument()
  })

  it('calls removePokemonReadyForCombat when delete icon is clicked', () => {
    const pokemonData = {
      name: 'Pikachu',
      url: 'pokemon-url'
    }

    // Configura el comportamiento del mock
    const mockRemovePokemonReadyForCombat = jest.fn()
    ;(usePokemonData as jest.Mock).mockReturnValue({
      data: {
        sprites: {
          front_default: 'mocked-image-url'
        }
      },
      removePokemonReadyForCombat: mockRemovePokemonReadyForCombat
    })

    render(<PokemonReadyForCombatCard {...pokemonData} />)

    // Simula un clic en el icono de eliminación
    fireEvent.click(screen.getByText('🗑️'))

    // Assert
    expect(mockRemovePokemonReadyForCombat).toHaveBeenCalledWith({
      name: 'Pikachu',
      url: 'pokemon-url'
    })
  })
})
