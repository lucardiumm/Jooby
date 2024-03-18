import prisma from '@/db/connector'

export async function POST(req: Request) {
    const notes = await prisma.note.findMany({
        include: {
            author: true,
        },
        orderBy: {
            createdAt: 'desc',
        }
    })

    return Response.json({
        notes: notes,
    }, {
        status: 200,
    })
}