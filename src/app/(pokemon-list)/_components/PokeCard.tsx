'use client'

import { Chip } from "@/components/chip/Chip"
import { ColumnContainer } from "@/components/container/ColumnContainer"
import { Typography } from "@/components/typography/Typography"
import colors from "@/constants/colors"
import Image from "next/image"
import { useRouter } from "next/navigation"
import customStyle from './PokeCard.module.css'

export const PokeCard = (params: any) => {
  const router = useRouter()
  return (
    <div
      {...params}
      className={customStyle.pokeCardBox}
      onClick={() => router.push(`/${params.evo_id}/${params.poke_id}`)}
      style={{
        background: `linear-gradient(60deg, ${colors[params.color]['darkest']} 0%, ${colors[params.color]['dark']} 35%, ${colors[params.color]['lightest']} 100%)`,
      }}
    >
      <ColumnContainer className={customStyle.pokeCardInfoContainer} gap="8px">
        <Typography
          className={customStyle.pokeCardName}
          color={colors.white.light}
          fontSize={'24px'}
        >{params.name}</Typography>
        <ColumnContainer
          container
          justifyContent={params.types.length > 1 ? "space-evenly" : 'center'}
          gap="4px"
        >
          {
            params.types.map((type: any) => (
              <Chip
                key={`chip-type-${type.pokemon_v2_type.id}`}
                color={params.color}
              >
                <Typography
                  fontSize={'14px'}
                  color={colors.white.lightest}
                >
                  {type.pokemon_v2_type.name}
                </Typography>
              </Chip>
            ))
          }
        </ColumnContainer>
      </ColumnContainer>

      <Image
        className={customStyle.pokeCardPokeballIcon}
        src={'/images/pokeball.svg'}
        alt="pokeball-icon"
        width={150}
        height={150}
        loading="lazy"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      
      <div
        className={customStyle.pokeCardImageContainer}
      >
        <Image
          src={params.image ?? "/images/no-image.jpg"}
          alt={`image-${params.name}`}
          width={80}
          height={80}
          loading="lazy"
          style={{
            objectFit: 'contain'
          }} />
      </div>

    </div>
  );
}