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
    const [divClassName, setDivClassName] = useState('flex flex-col rounded-xl mt-20 md:mt-5 gap-5 items-center content-center justify-center bg-transparent')

    useEffect(() => {
        if (!session) {
            setDivClassName('flex flex-col rounded-xl mt-5 gap-5 items-center content-center justify-center bg-transparent')
        } else {
            setDivClassName('flex flex-col rounded-xl mt-20 md:mt-5 gap-5 items-center content-center justify-center bg-transparent')
        }
    }, [session])

    return (
        <>
            <div className={divClassName}>
                <h1 className={'text-[#3d3d4e] text-5xl md:text-7xl w-4/5 md:w-3/5 align-middle text-center'} style={source.style}>
                    El sitio #1 para trabajos de ingeniería
                </h1>
                <p className={'text-[#3d3d4e] w-5/5 mx-5 md:w-2/5 align-middle text-center'} style={mona.style}>
                    Jooby es el núcleo principal de la comunidad de estudiantes de ingeniería, aqui se postulan los mejores puestos de trabajo diariamente.
                </p>

                <Post session={session} />
            </div>
        </>
    )
}