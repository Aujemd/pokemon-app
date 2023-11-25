import React from 'react'
import { render } from './utils'
import { fireEvent, screen } from '@testing-library/react'
import { PokemonCard } from '../components/pokemonCard'
import { Result } from '../types/types'
import { usePokemonData } from '../hooks/usePokemonData'

const defaultPokemonCardProps: Required<Result> = {
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/'
}

jest.mock('../hooks/usePokemonData', () => ({
  ...jest.requireActual('../hooks/usePokemonData'),
  usePokemonData: jest.fn()
}))

describe('PokemonCard', () => {
  it('should render the pokemon card', () => {
    ;(usePokemonData as jest.Mock).mockReturnValue({
      isLoading: false
    })
    render(<PokemonCard {...defaultPokemonCardProps} />)

    expect(screen.getByAltText('pokemon-pic')).toBeInTheDocument()

    expect(screen.getByText(defaultPokemonCardProps.name)).toBeInTheDocument()
  })

  it('calls addPokemonReadyForCombat when plus icon is clicked', () => {
    const mockAddPokemonReadyForCombat = jest.fn()

    ;(usePokemonData as jest.Mock).mockReturnValue({
      addPokemonReadyForCombat: mockAddPokemonReadyForCombat
    })
    render(<PokemonCard {...defaultPokemonCardProps} />)

    fireEvent.click(screen.getByText('+'))

    expect(mockAddPokemonReadyForCombat).toHaveBeenCalledWith({
      name: defaultPokemonCardProps.name,
      url: defaultPokemonCardProps.url
    })
  })
})
