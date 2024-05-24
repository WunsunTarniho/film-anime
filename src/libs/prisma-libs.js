import { PrismaClient } from "@prisma/client";

let prisma;

if(process.env.NODE_ENV === 'production'){
    prisma = new PrismaClient();
}else{
    !global.prisma ? global.prisma = new PrismaClient() : false;
    prisma = global.prisma;
}

export default prisma;