import { AppRouterContextProviderMock } from '@/__mocks__/useRouter';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PokeCards from '../app/(pokemon-list)/_components/PokeCards';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});
 
describe('PokeCards', () => {
  
  it('renders pokemon cards', () => {

    const push = jest.fn();
    
    const { getByTestId, getAllByTestId } = render(
      <AppRouterContextProviderMock router={{ push }}>
        <PokeCards data={mockData} />
      </AppRouterContextProviderMock>
    )
 
    const container = getByTestId('poke-cards-container')
    const card = getAllByTestId('poke-card')
 
    expect(container).toBeInTheDocument()
    expect(card[0]).toBeInTheDocument()
  })
  
})

const mockData = {
    "pokemon_v2_evolutionchain": [
        {
            "id": 1,
            "pokemon_v2_pokemonspecies": [
                {
                    "id": 1,
                    "order": 1,
                    "pokemon_v2_pokemons": [
                        {
                            "id": 1,
                            "name": "bulbasaur",
                            "pokemon_species_id": 1,
                            "pokemon_v2_pokemontypes": [
                                {
                                    "pokemon_v2_type": {
                                        "name": "grass",
                                        "id": 12
                                    }
                                },
                                {
                                    "pokemon_v2_type": {
                                        "name": "poison",
                                        "id": 4
                                    }
                                }
                            ],
                            "pokemon_v2_pokemonsprites": [
                                {
                                    "sprites": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                                }
                            ],
                            "pokemon_v2_pokemonspecy": {
                                "pokemon_v2_pokemoncolor": {
                                    "id": 5,
                                    "name": "green"
                                }
                            }
                        }
                    ]
                },
                {
                    "id": 2,
                    "order": 2,
                    "pokemon_v2_pokemons": [
                        {
                            "id": 2,
                            "name": "ivysaur",
                            "pokemon_species_id": 2,
                            "pokemon_v2_pokemontypes": [
                                {
                                    "pokemon_v2_type": {
                                        "name": "grass",
                                        "id": 12
                                    }
                                },
                                {
                                    "pokemon_v2_type": {
                                        "name": "poison",
                                        "id": 4
                                    }
                                }
                            ],
                            "pokemon_v2_pokemonsprites": [
                                {
                                    "sprites": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
                                }
                            ],
                            "pokemon_v2_pokemonspecy": {
                                "pokemon_v2_pokemoncolor": {
                                    "id": 5,
                                    "name": "green"
                                }
                            }
                        }
                    ]
                },
                {
                    "id": 3,
                    "order": 3,
                    "pokemon_v2_pokemons": [
                        {
                            "id": 3,
                            "name": "venusaur",
                            "pokemon_species_id": 3,
                            "pokemon_v2_pokemontypes": [
                                {
                                    "pokemon_v2_type": {
                                        "name": "grass",
                                        "id": 12
                                    }
                                },
                                {
                                    "pokemon_v2_type": {
                                        "name": "poison",
                                        "id": 4
                                    }
                                }
                            ],
                            "pokemon_v2_pokemonsprites": [
                                {
                                    "sprites": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
                                }
                            ],
                            "pokemon_v2_pokemonspecy": {
                                "pokemon_v2_pokemoncolor": {
                                    "id": 5,
                                    "name": "green"
                                }
                            }
                        },
                        {
                            "id": 10033,
                            "name": "venusaur-mega",
                            "pokemon_species_id": 3,
                            "pokemon_v2_pokemontypes": [
                                {
                                    "pokemon_v2_type": {
                                        "name": "grass",
                                        "id": 12
                                    }
                                },
                                {
                                    "pokemon_v2_type": {
                                        "name": "poison",
                                        "id": 4
                                    }
                                }
                            ],
                            "pokemon_v2_pokemonsprites": [
                                {
                                    "sprites": null
                                }
                            ],
                            "pokemon_v2_pokemonspecy": {
                                "pokemon_v2_pokemoncolor": {
                                    "id": 5,
                                    "name": "green"
                                }
                            }
                        },
                        {
                            "id": 10195,
                            "name": "venusaur-gmax",
                            "pokemon_species_id": 3,
                            "pokemon_v2_pokemontypes": [
                                {
                                    "pokemon_v2_type": {
                                        "name": "grass",
                                        "id": 12
                                    }
                                },
                                {
                                    "pokemon_v2_type": {
                                        "name": "poison",
                                        "id": 4
                                    }
                                }
                            ],
                            "pokemon_v2_pokemonsprites": [
                                {
                                    "sprites": null
                                }
                            ],
                            "pokemon_v2_pokemonspecy": {
                                "pokemon_v2_pokemoncolor": {
                                    "id": 5,
                                    "name": "green"
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
}