'use client'

import { GridRowContainer } from "@/components/container/GridRowContainer";
import { useDeviceSizes } from "@/hooks/useDeviceSize";
import { Fragment } from "react";
import { PokeCard } from "./PokeCard";
import styles from './PokeCards.module.css';

const PokeCards = (params: any) => {

  const {data} = params;
  const {
    isSmallMobile, isMobile, isSurfaceDuo, isTablet, isSmallDesktop, isLargeDesktop
  } = useDeviceSizes()

  const columns = isSmallMobile?1:isMobile?1:isSurfaceDuo?2:isTablet?2:isSmallDesktop?3:isLargeDesktop?4:undefined
  
  return (
    <div className={styles.pokeCardsContainer} data-testid="poke-cards-container">
      {
        columns
        ?
        <GridRowContainer
          columns={columns}
          gap="16px"
        >
          {
            data.pokemon_v2_evolutionchain.map((evolution: any) => (
              <Fragment
                key={`evolution-${evolution.id}`}
              >
                {
                  evolution.pokemon_v2_pokemonspecies.map((specy: any) => (
                    <div 
                      key={`specy-${specy.id}`}
                    >
                      {
                        specy.pokemon_v2_pokemons.map((pokemon: any) => (
                          <PokeCard
                            data-testid="poke-card"
                            key={`pokemon-${pokemon.id}`}
                            evo_id={evolution.id}
                            poke_id={pokemon.id}
                            image={pokemon.pokemon_v2_pokemonsprites[0].sprites}
                            name={pokemon.name}
                            types={pokemon.pokemon_v2_pokemontypes}
                            color={pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name}
                          />
                        ))
                      }
                    </div>
                  ))
                }
              </Fragment>
            ))
          }
        </GridRowContainer>
        :
        <></>
      }
    </div>
  )
}

export default PokeCards;