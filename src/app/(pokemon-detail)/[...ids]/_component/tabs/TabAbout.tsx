import { Typography } from "@/components/typography/Typography"
import colors from "@/constants/colors"

const TabAbout = ({pokemon_v2_pokemonspecies}: {pokemon_v2_pokemonspecies: any}) => {
  return(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '30%' }}
        >
          <Typography fontSize="14px" color={colors.black.lightest}>
            Species
          </Typography>
        </div>
        <div style={{ width: '70%' }} >
          <Typography fontSize="14px" color={colors.black.dark} fontWeight={600}>
            {pokemon_v2_pokemonspecies.pokemon_v2_pokemonspeciesnames[0].genus}
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '30%' }}
        >
          <Typography fontSize="14px" color={colors.black.lightest}>
            Height
          </Typography>
        </div>
        <div style={{ width: '70%' }}>
          <Typography fontSize="14px" color={colors.black.dark} fontWeight={600}>
            {pokemon_v2_pokemonspecies.pokemon_v2_pokemons[0].height*10} cm
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '30%' }}
        >
          <Typography fontSize="14px" color={colors.black.lightest}>
            Weight
          </Typography>
        </div>
        <div style={{ width: '70%' }}>
          <Typography fontSize="14px" color={colors.black.dark} fontWeight={600}>
            {pokemon_v2_pokemonspecies.pokemon_v2_pokemons[0].weight/10} kg
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ width: '30%' }}
        >
          <Typography fontSize="14px" color={colors.black.lightest}>
            Abilities
          </Typography>
        </div>
        <div style={{ width: '70%', display: 'inline' }}>
          {
            pokemon_v2_pokemonspecies.pokemon_v2_pokemons[0].pokemon_v2_pokemonabilities.map((ability: any) => (
              <Typography key={`pokemon-ability-${ability.pokemon_v2_ability.id}`} fontSize="14px" color={colors.black.dark} fontWeight={600}>
                - {ability.pokemon_v2_ability.name}
              </Typography>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TabAbout