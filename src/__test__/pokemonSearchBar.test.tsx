
import React from 'react'
import {  screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PokemonSearchBar } from '../components/pokemonSearchBar'
import { useSearch } from '../hooks/useSearch'
import { render } from './utils'

type UseSearchMock = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

jest.mock('../hooks/useSearch', () => ({
  useSearch: jest.fn() as jest.Mock<UseSearchMock>
}))

describe('PokemonSearchBar', () => {

it('calls handleSearch on input change', () => {
  const mockHandleSearch = jest.fn();
  (useSearch as jest.Mock<UseSearchMock>).mockReturnValue({
    handleSearch: mockHandleSearch,
  });

  render(<PokemonSearchBar />);

  fireEvent.change(screen.getByPlaceholderText('Que pokémon buscas...'), {
    target: { value: 'Pikachu' },
  });

  expect(mockHandleSearch).toHaveBeenCalledWith(expect.objectContaining({
    target: expect.objectContaining({ value: 'Pikachu' }),
  }));
});

})
