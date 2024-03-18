'use client'

import { config } from '@/extra/config'
import { ButtonType, PublishType } from '@/types/includes'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { signIn } from 'next-auth/react'

export default function Download({ links }: ButtonType) {
    const router = useRouter()

    const Press = async () => {
        links.forEach(el => {
            console.log(el)

            fetch(el, {}).then((response) => {
                return response.blob()
            }).then((blob) => {
                let blobUrl = URL.createObjectURL(blob)
                let a = document.createElement('a')
                a.download = el
                a.href = blobUrl
                document.body.appendChild(a)
                a.click()
                a.remove()
            })
        })
    }

    return (
        <>
            <div onClick={Press} className={'flex text-white font-semibold shadow-mee w-32 flex-row h-12 cursor-pointer rounded-full items-center content-center justify-center bg-mee'}>                
                Descargar
            </div>
        </>
    )
}