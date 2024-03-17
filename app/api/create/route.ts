import prisma from '@/db/connector'

export async function POST(req: Request) {
    const { title, email, images } = await req.json()
    console.log(email)

    return Response.json({}, {
        status: 200,
    })
}