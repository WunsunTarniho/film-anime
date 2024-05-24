import { getAnime } from "@/libs/api-libs";
import Image from "next/image";
import VideoPlayer from '@/components/utilities/VideoPlayer'
import CollectionButton from '@/components/CollectionList/CollectionButton'
import Comment from "../../../components/Comment";

export default async function Page({ params: { id } }) {

    const { data } = await getAnime(`anime/${id}`);

    return (
        <div className="xl:w-3/5 md:w-4/5 w-full shadow-xl m-auto">
            <div className="pt-4 px-4">
                <h3 className="md:text-2xl text-xl md:text-left text-center text-color-primary">{data.title}</h3>
            </div>
            <div className="p-4 flex md:justify-start justify-center items-center gap-4 text-color-primary">
                <div className="flex w-40 p-2 flex-col justify-center items-center rounded border border-color-primary md:text-md text-sm">
                    <h3>Peringkat</h3>
                    <p>#{data.rank}</p>
                </div>
                <div className="flex w-40 p-2 flex-col justify-center items-center rounded border border-color-primary md:text-md text-sm">
                    <h3>Score</h3>
                    <p>#{data.score}</p>
                </div>
                <CollectionButton anime={data} />
            </div>
            <div className="px-4 pb-4 flex md:flex-row flex-col gap-8 flex-col text-color-primary md:items-stretch items-center">
                <Image src={data.images.webp.large_image_url} alt={data.images.jpg.image_url} width={250} height={250}
                    className="max-w-64 object-cover rounded" />
                <div className="flex gap-8 md:text-md text-sm">
                    <div className="flex flex-col justify-evenly">
                        <p>Title</p>
                        <p>Episode</p>
                        <p>Members</p>
                        <p>Duration</p>
                    </div>
                    <div className="flex flex-col justify-evenly">
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                        <p>:</p>
                    </div>
                    <div className="flex flex-col justify-evenly">
                        <p>{data.title}</p>
                        <p>{data.episodes}</p>
                        <p>{data.members}</p>
                        <p>{data.duration}</p>
                    </div>
                </div>
            </div>
            <div className="p-4 flex flex-col gap-4 text-color-primary">
                <h3 className="md:text-2xl text-xl font-bold pb-1">Synopsis</h3>
                <p className="md:text-md text-sm">{data.synopsis}</p>
            </div>
            {
                data.trailer.youtube_id ?
                    <div className="flex items-center justify-center p-4">
                        <VideoPlayer videoID={data.trailer.youtube_id} />
                    </div>
                    : null
            }
            <Comment anime_id={id} />
        </div>
    )
}