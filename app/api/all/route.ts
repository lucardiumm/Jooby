import prisma from '@/db/connector'

export async function POST(req: Request) {
    const jobs = await prisma.job.findMany({
        orderBy: {
            createdAt: 'asc',
        }
    })

    return Response.json({
        jobs: jobs,
    }, {
        status: 200,
    })
}