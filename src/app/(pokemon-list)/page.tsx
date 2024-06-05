import LoadingModal from "@/components/modals/LoadingModal";
import dynamic from "next/dynamic";
import usePokemonList from "./_hooks/usePokemonList";
import styles from './page.module.css';


const PokeCardsLazy = dynamic(() => import('./_components/PokeCards'), {
  loading: () => <LoadingModal />
})
const PokeListHeaderLazy = dynamic(() => import('./_components/PokeListHeader'), {
  loading: () => <LoadingModal />
})

export default async function Home(props: any) {

  const {
    data,
  } = await usePokemonList(`%${props.searchParams.keyword || ''}%`);

  return (
    <div className={styles.pokemonListPage}>
      <PokeListHeaderLazy />
      <PokeCardsLazy data={data} />
    </div>
  );
}
