import { getClient } from "@/libs/apollo/apollo-client";
import { gql } from "@apollo/client";

export default async function usePokemonList (keyword: string){

    const getListQuery = gql`query Pokemon_v2_evolutionchain($keyword:String) {
        pokemon_v2_evolutionchain(
            where: { pokemon_v2_pokemonspecies: { pokemon_v2_pokemons: { name: { _ilike: $keyword } } } }
            limit: 100
            offset: 0
        ) {
            id
            pokemon_v2_pokemonspecies(
                order_by: { order: asc }
            ) {
                id
                order
                pokemon_v2_pokemons(limit: 1) {
                    id
                    name
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
                        pokemon_v2_pokemoncolor {
                            id
                            name
                        }
                    }
                }
            }
        }
    }`;

    const {data} = await getClient().query({
        query: getListQuery,
        variables: {
            keyword: keyword
        },

    });

    return {data}
}