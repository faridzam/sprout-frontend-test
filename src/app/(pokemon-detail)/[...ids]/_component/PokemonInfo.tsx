import { Typography } from "@/components/typography/Typography"

export const PokemonInfo = (params: any) => {
  return (
    <div
      style={{
        width: '80%',
        padding: '0px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}
    >

      {/* title */}
      <div
        style={{
          width: '100%',
          padding: '16px 0px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#DDD',
          borderRadius: '4px',
        }}
      >
        <Typography
          fontSize={'18px'}
        >
          Evolution Pokemon
        </Typography>
      </div>

      {/* detail */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          borderRadius: '4px',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              width: '100%',
              padding: '16px 0px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#DDD',
              borderBottom: '3px solid #CCC'
            }}
          >
            <Typography
              fontSize={'18px'}
            >
              Type
            </Typography>
          </div>
          <div
            style={{
              width: '100%',
              padding: '16px 0px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#DDD',
              borderBottom: '3px solid #CCC'
            }}
          >
            <Typography
              fontSize={'18px'}
            >
              Height
            </Typography>
          </div>
          <div
            style={{
              width: '100%',
              padding: '16px 0px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#DDD',
              borderBottom: '3px solid #CCC'
            }}
          >
            <Typography
              fontSize={'18px'}
            >
              Weight
            </Typography>
          </div>
          <div
            style={{
              width: '100%',
              padding: '16px 0px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#DDD'
            }}
          >
            <Typography
              fontSize={'18px'}
            >
              Number Battled
            </Typography>
          </div>
        </div>
        <div
          style={{
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              width: '100%',
              padding: '16px 0px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFF',
              borderBottom: '3px solid #FFF',
              gap: '8px',
            }}
          >
            {params.data.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.map((type: any) => (
              <Typography
                key={`params-${type.pokemon_v2_type.id}`}
                fontSize={'18px'}
              >
                {type.pokemon_v2_type.name}
              </Typography>
            ))}
          </div>
          <div
            style={{
              width: '100%',
              padding: '16px 0px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFF',
              borderBottom: '3px solid #FFF'
            }}
          >
            <Typography
              fontSize={'18px'}
            >
              {params.data.pokemon_v2_pokemons[0].height}
            </Typography>
          </div>
          <div
            style={{
              width: '100%',
              padding: '16px 0px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFF',
              borderBottom: '3px solid #FFF'
            }}
          >
            <Typography
              fontSize={'18px'}
            >
              {params.data.pokemon_v2_pokemons[0].weight}
            </Typography>
          </div>
          <div
            style={{
              width: '100%',
              padding: '16px 0px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFF'
            }}
          >
            <Typography
              fontSize={'18px'}
            >
              -- data not found --
            </Typography>
          </div>
        </div>
      </div>

      {/* description */}
        <div
          style={{
            width: '100%',
            padding: '16px 0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFF',
            borderRadius: '4px',
          }}
        >
          <div style={{padding: '0px 24px'}}>
            <Typography
              fontSize={'16px'}
              
            >
              {params.data.pokemon_v2_pokemons[0].pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesdescriptions[0]?.description || "-- no description --"}
            </Typography>
          </div>
        </div>
    </div>
  )
}