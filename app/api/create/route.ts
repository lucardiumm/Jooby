import prisma from '@/db/connector'

export async function POST(req: Request) {
    const { title, email, location, remote, link, tags, description } = await req.json()

    const info = await prisma.user.findUnique({
        where: {
            email: email,
        },
    })

    await prisma.job.create({
        data: {
            author: {
                connect: {
                    id: info?.id,
                }
            },
            description: description,
            title: title,
            location: location,
            remote: remote,
            link: link,
            tags: tags,
        },
    })

    return Response.json({}, {
        status: 200,
    })
}