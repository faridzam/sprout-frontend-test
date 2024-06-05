import { Typography } from "@/components/typography/Typography"
import colors from "@/constants/colors"
import Image from "next/image"

const TabEvolution = ({pokemonDetail}: {pokemonDetail: any}) => {
  return(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {
        pokemonDetail.data.pokemon_v2_evolutionchain_by_pk.pokemon_v2_pokemonspecies.map((pokemon: any, index: number) => (
          <div
            key={`pokemon-evolution-${pokemon.id}`}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div style={{ width: '20%' }}
            >
              <Typography fontSize="14px" color={colors.black.lightest}>
                #{pokemon.id}
              </Typography>
            </div>
            <div style={{ width: '80%', display: 'flex', gap: '8px', justifyContent: 'space-between', alignItems: 'center' }} >
              <Typography fontSize="14px" color={colors.black.dark} fontWeight={600}>
                {pokemon.pokemon_v2_pokemons[0].name}
              </Typography>
              <Image
                src={
                  pokemon
                  .pokemon_v2_pokemons[0]
                  .pokemon_v2_pokemonsprites[0]
                  .sprites ?? "/images/no-image.jpg"
                }
                alt={`pokemon-image-${pokemon.id}`}
                height={50}
                width={50}
                style={{
                  maxWidth: "100%",
                  height: "100%",
                  objectFit: "contain"
                }}
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TabEvolution