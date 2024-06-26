'use client'

import TextButton from "@/components/buttons/TextButton"
import { Chip } from "@/components/chip/Chip"
import { ColumnContainer } from "@/components/container/ColumnContainer"
import { GridRowContainer } from "@/components/container/GridRowContainer"
import { RowContainer } from "@/components/container/RowContainer"
import { Typography } from "@/components/typography/Typography"
import colors from "@/constants/colors"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Arrow } from "./Arrow"
import styles from './PokemonDetailCard.module.css'
import TabAbout from "./tabs/TabAbout"
import TabEvolution from "./tabs/TabEvolution"
import TabMoves from "./tabs/TabMoves"
import TabStats from "./tabs/TabStats"

const PokemonDetailCard = (
  {
    pokemonDetail,
    ids
  }
  :{
    pokemonDetail: any,
    ids: string[]
  }
) => {

  const router = useRouter();

  const pokemon_v2_pokemonspecies = pokemonDetail.data.pokemon_v2_evolutionchain_by_pk.pokemon_v2_pokemonspecies.find((spec: any) => {
    if (ids[1]) {
      return spec.id === parseInt(ids[1], 10)
    }
    return spec.id
  })

  const [activeTab, setActiveTab] = useState<number>(1)

  const pokemonDetailTab = [
    {
      id: 1,
      title: "About",
      component: <TabAbout pokemon_v2_pokemonspecies={pokemon_v2_pokemonspecies} />
    },
    {
      id: 2,
      title: "Base Stats",
      component: <TabStats pokemon_v2_pokemonspecies={pokemon_v2_pokemonspecies} />
    },
    {
      id: 3,
      title: "Evolution",
      component: <TabEvolution pokemonDetail={pokemonDetail} />
    },
    {
      id: 4,
      title: "Moves",
      component: <TabMoves pokemon_v2_pokemonspecies={pokemon_v2_pokemonspecies} />
    },
  ]

  return (
    <div
      className={styles.pokemonDetailCard}
      style={{
        backgroundColor: colors[
          pokemonDetail.data.pokemon_v2_evolutionchain_by_pk.pokemon_v2_pokemonspecies
          .find((specy: any) => specy.id === parseInt(ids[1])).pokemon_v2_pokemoncolor.name
        ]['dark']
      }}
    >
      <div className={styles.pokemonDetailCardWrapperTop}>
        <div className={styles.pokemonDetailCardHeader}>
          <div className={styles.pokemonDetailCardHeaderLeft}>
            <RowContainer alignItems="flex-start" gap="8px">
              <Arrow
                direction={'left'}
                onClick={() => router.back()}
              />
              <ColumnContainer justifyContent="flex-start">
                <Typography color={colors.white.lightest} fontSize="24px" fontWeight={700}>
                  {pokemon_v2_pokemonspecies.pokemon_v2_pokemons[0].name}
                </Typography>
                <RowContainer gap="8px" className={styles.pokemonDetailCardHeaderChipContainer}>
                  {
                    pokemon_v2_pokemonspecies.pokemon_v2_pokemons[0].pokemon_v2_pokemontypes.map((type: any) => (
                      <Chip 
                        key={`pokemon-type-${type.pokemon_v2_type.id}`}
                        color={pokemon_v2_pokemonspecies.pokemon_v2_pokemoncolor.name}
                      >
                        <Typography color={colors.white.lightest}>
                          {type.pokemon_v2_type.name}
                        </Typography>
                      </Chip>
                    ))
                  }
                </RowContainer>
              </ColumnContainer>
            </RowContainer>
          </div>
          <div className={styles.pokemonDetailCardHeaderRight}>
            <Typography color={colors.white.lightest} fontSize="14px">
              #{pokemon_v2_pokemonspecies.id}
            </Typography>
          </div>
        </div>
        <div
          className={styles.pokemonDetailCardImage}
        >
          <Image
            src={
              pokemon_v2_pokemonspecies
              .pokemon_v2_pokemons[0]
              .pokemon_v2_pokemonsprites[0]
              .sprites ?? "/images/no-image.jpg"
            }
            alt="pokemon-image"
            fill
            style={{
              maxWidth: "100%",
              height: "100%",
              objectFit: "contain"
            }} />
        </div>
        <Image
          className={styles.pokeCardPokeballIcon}
          src={'/images/pokeball.svg'}
          alt="pokeball-icon"
          width={300}
          height={300}
          loading="lazy"
        />
      </div>
      <div className={styles.pokemonDetailCardWrapperBottom}>
        <GridRowContainer
          className={styles.pokemonDetailCardTabs}
          columns={4}
          gap="8px"
        >
          {
            pokemonDetailTab.map((tab) => (
              <TextButton
                key={`tab-button-${tab.title}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Typography
                  fontSize="12px"
                  fontWeight={activeTab === tab.id ? 700 : 500}
                  color={activeTab === tab.id ? colors.black.dark : colors.black.lightest}
                >
                  {tab.title}
                </Typography>
              </TextButton>
            ))
          }
        </GridRowContainer>
        <div className={styles.pokemonDetailCardTab}>
          {
            pokemonDetailTab.find((tab) => tab.id === activeTab)?.component
          }
        </div>
      </div>
    </div>
  );
}

export default PokemonDetailCard