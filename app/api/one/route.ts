import prisma from '@/db/connector'
import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CN,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SK,
    secure: true,
})

export async function POST(req: Request) {
    const { publicId } = await req.json()
    
    cloudinary.utils.private_download_url(publicId, 'jpg', {})

    return Response.json({

    }, {
        status: 200,
    })
}