import ProgressBar from "@/components/progress/ProgressBar"
import { Typography } from "@/components/typography/Typography"
import colors from "@/constants/colors"

const TabMoves = ({pokemon_v2_pokemonspecies}: {pokemon_v2_pokemonspecies: any}) => {
  return(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {
        pokemon_v2_pokemonspecies.pokemon_v2_pokemons[0].pokemon_v2_pokemonmoves.map((move: any) => (
          <div
            key={`pokemon-move-${move.pokemon_v2_move.id}`}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div style={{ width: '40%' }}
            >
              <Typography fontSize="14px" color={colors.black.lightest}>
                {move.pokemon_v2_move.name}
              </Typography>
            </div>
            <div style={{ width: '60%', display: 'flex', gap: '8px', justifyContent: 'space-between', alignItems: 'center' }} >
              <Typography fontSize="14px" color={colors.black.dark} fontWeight={600}>
                {move.pokemon_v2_move.power}
              </Typography>
              <ProgressBar value={move.pokemon_v2_move.power} />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TabMoves