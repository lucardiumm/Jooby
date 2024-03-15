import prisma from '@/db/connector'

export async function POST(req: Request) {
    const { title, description, location, link, remote, tags, email } = await req.json()
    console.log(email)

    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    })

    await prisma.job.create({
        data: {
            user: {
                connect: {
                    id: user?.id,
                },
            },
            title: title,
            description: description,
            location: location,
            link: link,
            remote: remote,
            tags: tags,
        },
    })

    return Response.json({}, {
        status: 200,
    })
}