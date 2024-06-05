'use client'

import { Typography } from "@/components/typography/Typography"
import Image from "next/legacy/image"
import { useRouter } from "next/navigation"
import { Arrow } from "./Arrow"

export const PokemonNav = (params: any) => {
  const router = useRouter();
  const length = params.evos.length;
  const currentIndex = params.evos.findIndex((spec: any) => {
    return spec.id === parseInt(params.data.pokemon_v2_pokemons[0].id, 10)
  })

  const handlePrev = () => {
    if (params.evoId > 1) {
      router.push(`/${params.evoId-1}`)
    }
  }
  const handleNext = () => {
    router.push(`/${params.evoId+1}`)
  }
  const handleUp = () => {
    if (currentIndex+1 >= length) {
      router.push(`/${params.evoId}/${params.evos[0].pokemon_v2_pokemons[0].id}`)
    } else {
      router.push(`/${params.evoId}/${params.evos[currentIndex+1].pokemon_v2_pokemons[0].id}`)
    }
  }
  const handleDown = () => {
    if (currentIndex <= 0) {
      router.push(`/${params.evoId}/${params.evos[length-1].pokemon_v2_pokemons[0].id}`)
    } else {
      router.push(`/${params.evoId}/${params.evos[currentIndex-1].pokemon_v2_pokemons[0].id}`)
    }
  }
  return (
    <div
      style={{
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px'
      }}
    >
      <Arrow 
        direction={'left'}
        onClick={handlePrev}
      />
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Arrow
          direction={'up'}
          onClick={handleUp}
        />
        <div
          style={{
            width: '100%',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            // border: '1px solid #CCC',
            backgroundColor: '#FFF',
            borderRadius: '4px',
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px 16px'
            }}
          >
            <div
              style={{
                width: '30%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image 
                src={params.data.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0].sprites ?? "/images/no-image.jpg"}
                alt={`image-${params.data.pokemon_v2_pokemons[0].id}`}
                width={30}
                height={30}
                loading="lazy"
              />
              <div style={{marginLeft: '16px'}}>
                <Typography fontSize={'24px'} >no. {params.data.pokemon_v2_pokemons[0].id}</Typography>
              </div>
            </div>

            <div
              style={{
                width: '70%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Typography fontSize={'24px'}>{params.data.pokemon_v2_pokemons[0].name}</Typography>
              <Image 
                src={'/images/pokeball.svg'}
                alt={`poke-ball`}
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
        <Arrow
          direction={'down'}
          onClick={handleDown}
        />
      </div>
      <Arrow
        direction={'right'}
        onClick={handleNext}
      />
    </div>
  )
}