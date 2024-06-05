import ProgressBar from "@/components/progress/ProgressBar"
import { Typography } from "@/components/typography/Typography"
import colors from "@/constants/colors"

const TabStats = ({pokemon_v2_pokemonspecies}: {pokemon_v2_pokemonspecies: any}) => {
  return(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {
        pokemon_v2_pokemonspecies.pokemon_v2_pokemons[0].pokemon_v2_pokemonstats.map((stat: any) => (
          <div
            key={`pokemon-stat-${stat.pokemon_v2_stat.name}`}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div style={{ width: '40%' }}
            >
              <Typography fontSize="14px" color={colors.black.lightest}>
                {stat.pokemon_v2_stat.name}
              </Typography>
            </div>
            <div style={{ width: '60%', display: 'flex', gap: '8px' }} >
              <Typography fontSize="14px" color={colors.black.dark} fontWeight={600}>
                {stat.base_stat}
              </Typography>
              <ProgressBar value={stat.base_stat} />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TabStats