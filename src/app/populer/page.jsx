'use client'

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnime } from "@/libs/api-libs";

export default function Page() {

    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);

    const fetchData = async (page) => {
        const data = await getAnime('top/anime', `page=${page}`);
        setData(data);
    }

    useEffect(() => {
        fetchData(page);
    }, [page])

    return (
        <>
            <HeaderMenu page={page} title='Anime Terpopuler' />
            <AnimeList animes={data} />
            <Pagination page={page} lastPage={data.pagination?.last_visible_page} setPage={setPage} />
        </>
    )
}