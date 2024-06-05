import { getClient } from "@/libs/apollo/apollo-client";
import { gql } from "@apollo/client";

export default async function usePokemonDetail (id: string[]){

    const getDetailQuery = gql`query Pokemon_v2_evolutionchain_by_pk($evo_id: Int!) {
        pokemon_v2_evolutionchain_by_pk(id: $evo_id) {
            id
            pokemon_v2_pokemonspecies(order_by: {id: asc})  {
                id
                pokemon_v2_pokemons {
                    id
                    name
                    height
                    weight
                    pokemon_species_id
                    pokemon_v2_pokemontypes {
                        pokemon_v2_type {
                            name
                            id
                        }
                    }
                    pokemon_v2_pokemonsprites {
                        sprites(path: "other.dream_world.front_default")
                    }
                    pokemon_v2_pokemonspecy {
                        pokemon_v2_pokemonspeciesdescriptions {
                            description
                        }
                    }
                    pokemon_v2_pokemonabilities {
                        pokemon_v2_ability {
                            generation_id
                            id
                            is_main_series
                            name
                        }
                    }
                    pokemon_v2_pokemonstats {
                        pokemon_v2_stat {
                            name
                        }
                        base_stat
                    }
                }
                pokemon_v2_pokemoncolor {
                    id
                    name
                }
                pokemon_v2_pokemonspeciesnames(where: { language_id: { _eq: 9 } }) {
                    genus
                    name
                }
            }
        }
    }`;

    const pokemonDetail = await getClient().query({
        query: getDetailQuery,
        variables: {
            evo_id: parseInt(id[0], 10),
        },
    });

    return {pokemonDetail}
}