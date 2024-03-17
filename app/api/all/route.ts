import prisma from '@/db/connector'

export async function POST(req: Request) {
    const notes = await prisma.note.findMany({})

    return Response.json({
        notes: notes,
    }, {
        status: 200,
    })
}