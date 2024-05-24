import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import githubAuth from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google'
import prisma from '../../../../libs/prisma-libs';
import { PrismaAdapter } from '@auth/prisma-adapter'

const authOption = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        githubAuth({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
    },
    callbackUrl: '/',
}

const handler = NextAuth(authOption);

export { handler as GET, handler as POST, authOption };