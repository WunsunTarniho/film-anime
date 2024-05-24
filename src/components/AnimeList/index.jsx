import Image from "next/image";
import Link from "next/link";

export default function AnimeList({ animes }) {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 px-4 pb-4">
            {animes.data?.map(anime => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id} className="shadow-xl cursor-pointer text-color-primary hover:text-color-accent transition-all">
                        <Image src={anime.images.webp.large_image_url} alt="..." width={600} height={600} className="w-full max-h-80 object-cover" />
                        <h3 className="p-4 md:text-xl text-md">{anime.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
} 