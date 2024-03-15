'use client'

import { config } from '@/extra/config'
import { PublishType } from '@/types/includes'
import { useEffect, useRef, useState } from 'react'
import Post from '@/components/core/buttons/Post'
import localFont from 'next/font/local'

const source = localFont({
    src: '../../public/fonts/Source/Regular.otf',
})

const mona = localFont({
    src: '../../public/fonts/Mona/Regular.otf',
})

export default function Header({ session }: PublishType) {
    return (
        <>
            <div className={'flex flex-col rounded-xl gap-5 items-center content-center justify-center bg-transparent'}>                
                <h1 className={'text-[#3d3d4e] text-4xl md:text-7xl w-4/5 md:w-3/5 align-middle text-center'} style={source.style}>
                    The #1 job board for graphic design jobs
                </h1>
                <p className={'text-[#3d3d4e] w-4/5 md:w-3/5 align-middle text-center'} style={mona.style}>
                    Jooble is the heart of the design community and the best resource to discover and connect with designers and jobs worldwide.
                </p>

                <Post session={session} />
            </div>
        </>
    )
}