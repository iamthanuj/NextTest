import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import Credentials, { CredentialsProvider } from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";

export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[
        CredentialsProvider({
            name: "Credentials",
            Credentials: {
                email: {label: 'Email', type:'email', placeholder: 'Email'},
                password:{ label:'Password', type:'password', placeholder:'Password' }
            },
            async authorize(credentials, req){
                if(!credentials.email || !credentials.password) return null;

                prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    session : {
        strategy:"jwt"
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }