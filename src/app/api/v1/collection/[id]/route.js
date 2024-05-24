import prisma from '../../../../../libs/prisma-libs';
import { Auth, Unauthorization } from '@/libs/auth-libs';

export async function DELETE(request, { params }) {

    const session = await Auth.check();
    if (!session) return Unauthorization();

    const { id } = params;

    const deleteCollection = await prisma.collection.delete({
        where: {
            id: parseInt(id),
        }
    });

    if (!deleteCollection) return Response.json({
        status: 404,
        message: 'Data not found',
    })

    return Response.json({
        status: 200,
        message: 'Collection has been deleted',
    })
}