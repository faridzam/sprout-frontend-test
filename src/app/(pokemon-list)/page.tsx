import PokeCards from "./_components/PokeCards";
import { PokeListHeader } from "./_components/PokeListHeader";
import usePokemonList from "./_hooks/usePokemonList";
import styles from './page.module.css';

export default async function Home(props: any) {

  const {
    data,
  } = await usePokemonList(`%${props.searchParams.keyword || ''}%`);

  return (
    <div className={styles.pokemonListPage}>
      <PokeListHeader />
      <PokeCards data={data} />
    </div>
  );
}
