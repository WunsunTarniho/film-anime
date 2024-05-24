import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnime, getNestedAnime, reproduceAnime } from "@/libs/api-libs";

export default async function Page() {

  const topAnime = await getAnime('top/anime', 'limit=8');
  let recommended = await getNestedAnime('recommendations/anime', 'entry');
  recommended = reproduceAnime(recommended, 8);

  return (
    <>
      <section>
        <Header title='Paling Populer' linkHref='/populer' />
        <AnimeList animes={topAnime} />
      </section>
      <section>
        <Header title='Recomendation' />
        <AnimeList animes={recommended} />
      </section>
    </>
  );
}