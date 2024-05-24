import Image from "next/image";
import Link from "next/link";

export default function CollectionList({ collection }) {
    return (
        <Link href={`/anime/${collection.mal_id}`} className="relative border-2 overflow-hidden border-color-accent" key={collection.mal_id}>
            <Image src={collection.anime_image} width={600} height={600} alt='' className="w-full max-h-80 object-cover" />
            <div className="absolute bottom-0 w-full h-16 bg-color-accent text-color-dark flex items-center justify-center z-0">
                <h6 className="text-xl p-4">{collection.anime_title}</h6>
            </div>
        </Link>
    )
}