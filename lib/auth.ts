import prisma from '@/db/connector'
import { NextAuthOptions } from 'next-auth'
import Linkedin from 'next-auth/providers/linkedin'
import Google from 'next-auth/providers/google'

export const auth: NextAuthOptions = {
    providers: [
        Linkedin({
            clientId: process.env.LINKEDIN_ID as string,
            clientSecret: process.env.LINKEDIN_SECRET as string,
        }), 
        Google({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }), 
    ],
    callbacks: {
        async session({ session, token, user }) {
            const info = await prisma.user.findUnique({
                where: {
                    email: session.user?.email as string,
                },
            })

            if (!info) {
                await prisma.user.create({
                    data: {
                        email: session.user?.email as string,
                        username: session.user?.name as string,
                        image: session.user?.image as string,
                    }
                })
            }
            
            return session
        },
    },
    secret: process.env.NEXTAUTH_SECRET || 'ASLDNASDJL',
}