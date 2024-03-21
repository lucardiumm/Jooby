'use client'

import { config } from '@/extra/config'
import { ButtonType, PublishType } from '@/types/includes'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { signIn } from 'next-auth/react'

export default function Apply({ link }: ButtonType) {
    const router = useRouter()

    const Press = async () => {
        router.push(link)
    }

    return (
        <>
            <div onClick={Press} className={'flex text-white font-semibold shadow-mee w-32 flex-row h-12 absolute bottom-6 md:bottom-10 cursor-pointer rounded-full items-center content-center justify-center bg-mee'}>                
                Aplicar
            </div>
        </>
    )
}