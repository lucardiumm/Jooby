import prisma from '@/db/connector'
import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CN,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SK,
    secure: true,
})

export async function POST(req: Request) {
    const { title, email, images, description } = await req.json()

    const info = await prisma.user.findUnique({
        where: {
            email: email,
        },
    })

    const note = await prisma.note.create({
        data: {
            author: {
                connect: {
                    id: info?.id
                }
            },
            title: title,
            images: [],
            content: description,
        },
    })
    
    images.forEach(el => {
        cloudinary.uploader.upload(el, undefined, async (err, result) => {
            await prisma.note.update({
                where: {
                    id: note.id,
                },
                data: {
                    images: [...note.images, result?.url as string],
                },
            })
        })
    })

    return Response.json({}, {
        status: 200,
    })
}