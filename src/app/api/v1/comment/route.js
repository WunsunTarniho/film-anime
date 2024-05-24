import prisma from '../../../../libs/prisma-libs'
import { z } from 'zod'
import { Auth, Unauthorization } from '@/libs/auth-libs';

export async function GET(req) {
    const session = await Auth.user();
    if(!session) return Unauthorization();
    
    const { searchParams } = new URL(req.url);
    const anime_id = searchParams.get('anime_id');

    const comments = await prisma.comment.findMany({
        where: {
            anime_id,
        },
        include: {
            user: {
                select: {
                    name: true,
                }
            }
        },
        orderBy: {
            created_at: 'desc',
        },
    });

    return Response.json({
        status: 200,
        data: comments,
    })
}

export async function POST(req) {
    const session = await Auth.user();
    if (!session) return Unauthorization();

    const body = await req.json();

    const rules = z.object({
        anime_id: z.string().min(1),
        commentUser: z.string().min(1),
    });

    const validation = rules.safeParse(body);

    if (!validation.success) {
        const errors = validation.error.issues;

        return Response.json({
            errors,
        }, { status: 400 });
    }

    const { anime_id, commentUser } = body;

    const addComment = await prisma.comment.create({
        data: {
            anime_id,
            userId: session.id,
            content: commentUser,
        }
    });

    return Response.json({
        status: 200,
        message: 'Comment send success',
    })
}