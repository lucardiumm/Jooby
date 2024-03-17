import prisma from '@/db/connector'

export async function POST(req: Request) {
    const { email, title } = await req.json()
    
    return Response.json({

    }, {
        status: 200,
    })
}