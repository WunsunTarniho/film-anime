import { authOption } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth";
import prisma from './prisma-libs';

class Auth {
    static async check() {
        const session = await getServerSession(authOption);
        if(!session) return false;
        
        return true;
    }
    
    static async user(){
        const session = await getServerSession(authOption);
        
        let user = null;
        
        try{
            user = await prisma.user.findUnique({
                where: {
                    email: session?.user?.email,
                }
            })
        }catch(error){
            Unauthorization();
        }

        return user;
    }
}

const Unauthorization = function () {
    return Response.json({
        status: 401,
        message: 'Unauthorization',
    }, { status: 401 });
}

export { Auth, Unauthorization };