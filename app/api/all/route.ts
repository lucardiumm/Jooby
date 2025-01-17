import prisma from '@/db/connector'

export async function POST(req: Request) {
    const jobs = await prisma.job.findMany({
        include: {
            author: true,
        },
        orderBy: {
            createdAt: 'desc',
        }
    })

    return Response.json({
        jobs: jobs,
    }, {
        status: 200,
    })
}