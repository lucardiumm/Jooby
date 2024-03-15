'use client'

import { useEffect, useRef, useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import Form from '@/components/core/Form'
import { PublishType } from '@/types/includes'

export default function Publish({ session }: PublishType) {
    const router = useRouter()

    if (!session) {
        router.replace('/')
    }

    return (
        <>
            <div className={'flex flex-1 h-screen w-screen overflow-y-scroll flex-col relative items-center content-center justify-center bg-white'}>
                <BsArrowLeftShort onClick={() => router.back()} className={'text-4xl text-gray-600 absolute left-5 top-5 cursor-pointer'} />        
                <Form session={session} />
            </div>
        </>
    )
}