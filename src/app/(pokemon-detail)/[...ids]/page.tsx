import colors from "@/constants/colors";
import PokemonDetailCard from "./_component/PokemonDetailCard";
import usePokemonDetail from "./_hooks/usePokemonDetail";
import styles from './page.module.css';

const DetailPage = async ({ params }: { params: {ids: string[]} }) => {

  const {pokemonDetail} = await usePokemonDetail(params.ids);
  
  return (
    <div
      className={styles.pokemonDetailPage}
      style={{
        backgroundColor: colors[
          pokemonDetail.data.pokemon_v2_evolutionchain_by_pk.pokemon_v2_pokemonspecies
          .find((specy: any) => specy.id === parseInt(params.ids[1])).pokemon_v2_pokemoncolor.name
        ]['lightest']
      }}
    >
      <PokemonDetailCard
        pokemonDetail={pokemonDetail}
        ids={params.ids}
      />
    </div>
  )
}

export default DetailPage;