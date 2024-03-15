import prisma from '@/db/connector'

export async function POST(req: Request) {
    const { email, title } = await req.json()

    const specific = await prisma.user.findFirst({
        where: {
            email: email,
        },
        select: {
            jobs: {
                where: {
                    title: title,
                }
            }
        }
    })

    return Response.json({
        job: specific
    }, {
        status: 200,
    })
}