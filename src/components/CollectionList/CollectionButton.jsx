'use client'

import Collection from "@/app/controller/collection";
import { BookmarkSimple } from "@phosphor-icons/react"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CollectionButton({ anime }) {
    const router = useRouter();
    const [isCollection, setIsCollection] = useState(false);
    const [collectionData, setCollectionData] = useState([]);

    const addToCollection = async anime => {

        const data = await Collection.store({ anime });

        if (data.status == 200) {
            setIsCollection(true);
            findCollection();
        }else if(data.status == 401){
            router.push('/api/auth/signin');
        }
    }

    const deleteCollection = async id => {

        const data = await Collection.destroy({ id });

        if (data.status == 200) {
            setCollectionData([]);
            setIsCollection(false);
        }
    }

    const findCollection = async () => {
        const data = await Collection.show({ mal_id: anime.mal_id });
        // console.log(data)
        if (data.status == 200) {
            setCollectionData(data.data);
            setIsCollection(true)
        }
    }
    
    useEffect(() => {
        findCollection();
    }, [isCollection])

    return (
        <>
            {
                isCollection ?
                    <button type="button" aria-label="removeCollectionButton" className="rounded" onClick={() => deleteCollection(collectionData.id)}>
                        <BookmarkSimple className={`text-color-primary font-bold`} size={30} weight={'fill'} />
                    </button>
                    :
                    <button type="button" aria-label="addCollectionButton" className="rounded" onClick={() => addToCollection(anime)}>
                        <BookmarkSimple className={`text-color-primary font-bold`} size={30} />
                    </button>
            }
        </>
    )
}