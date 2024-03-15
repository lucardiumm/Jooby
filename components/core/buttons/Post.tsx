'use client'

import { config } from '@/extra/config'
import { PublishType } from '@/types/includes'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { signIn } from 'next-auth/react'

export default function Post({ session }: PublishType) {
    const router = useRouter()

    return (
        <>
            <div onClick={() => {
                session ? router.push('/publish') : signIn('google')
            }} className={'flex text-white font-semibold shadow-mee w-32 flex-row h-12 cursor-pointer rounded-full items-center content-center justify-center bg-mee'}>                
                <BsPlus className={'mr-2 font-semibold text-xl'} /> Post a job
            </div>
        </>
    )
}