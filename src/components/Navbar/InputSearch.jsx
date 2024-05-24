'use client'

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation";

export default function InputSearch() {

    const router = useRouter();

    const handleSearch = e => {
        e.preventDefault();
        const keyword = document.querySelector('input[name="search"]').value;
        if(keyword.trim()) return router.push(`/search/${keyword}`);
    }

    return (
        <form className="relative w-full" id='search' onSubmit={handleSearch}>
            <input type="text" placeholder="Cari Anime..." name="search" className="w-full p-2 rounded"/>
            <button className="absolute top-2 end-2" type="submit">
                <MagnifyingGlass size={24} />
            </button>
        </form>
    )
}