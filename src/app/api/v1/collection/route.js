// import prisma from '../../../../libs/prisma-libs'
import { Auth, Unauthorization } from '@/libs/auth-libs';
import prisma from '@/libs/prisma-libs';

export async function POST(request) {
    const session = await Auth.user();
    if (!session) return Unauthorization();

    const { anime } = await request.json();
    const mal_id = anime.mal_id.toString();

    const createCollection = await prisma.collection.create({
        data: {
            userId: session.id,
            mal_id,
            anime_title: anime.title,
            anime_image: anime.images.webp.large_image_url,
        }
    });

    if (!createCollection) return Response.json();

    return Response.json({
        status: 200,
        message: 'New collection has been added',
    });
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const mal_id = searchParams.get('mal_id');
    const user_id = searchParams.get('user_id');

    if (user_id) {
        try{
            const collections = await prisma.collection.findMany({
                where: {
                    userId: user_id,
                }
            });

            return Response.json({
                status: 200,
                data: collections,
            });
        }catch(error){
            return Response.json({
                status: 200,
                data: [],
            });
        }
    }

    const session = await Auth.user();
    if (!session) return Unauthorization();

    const collection = await prisma.collection.findMany({
        where: {
            userId: session.id,
            mal_id,
        },
    });

    if (collection.length == 0) {
        return Response.json({
            status: 404,
            message: 'Data not found',
        })
    }

    return Response.json({
        status: 200,
        data: collection[0],
    })
}