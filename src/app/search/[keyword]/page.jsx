import { getAnime } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Page({ params: { keyword } }) {

    const data = await getAnime('anime', `q=${keyword}`);

    return (
        <section>
            <Header title={`Hasil pencarian ${decodeURI(keyword)}...`} />
            <AnimeList animes={data} />
        </section>
    );
}