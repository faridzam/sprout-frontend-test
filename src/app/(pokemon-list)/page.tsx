import dynamic from "next/dynamic";
import { PokeListHeader } from "./_components/PokeListHeader";
import usePokemonList from "./_hooks/usePokemonList";
import styles from './page.module.css';


const PokeCardsLazy = dynamic(() => import('./_components/PokeCards'), {
  loading: () => <p>loading...</p>
})

export default async function Home(props: any) {

  const {
    data,
  } = await usePokemonList(`%${props.searchParams.keyword || ''}%`);

  return (
    <div className={styles.pokemonListPage}>
      <PokeListHeader />
      <PokeCardsLazy data={data} />
    </div>
  );
}
