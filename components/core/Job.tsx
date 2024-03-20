'use client'

import { config } from '@/extra/config'
import { JobType } from '@/types/includes'
import { useEffect, useRef, useState } from 'react'
import { Drawer } from 'vaul'
import { FaLink } from 'react-icons/fa6'
import { useRouter } from 'next/navigation'
import { useCopyToClipboard } from 'usehooks-ts'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Image from 'next/image'
import Apply from './buttons/Apply'

export default function Note({ title, image, description, remote, location, name, link }: JobType) {
    const buttonRef = useRef<HTMLButtonElement>(null)
    
    const [copiedText, copyToClipboard] = useCopyToClipboard()
    
    const Press = async () => {
        copyToClipboard(link)

        buttonRef.current?.click()
    }

    return (
        <>  
            <li onClick={Press} className={'flex text-center my-5 border-2 border-[#f3f3f4] w-72 md:w-96 h-28 flex-row rounded-xl items-center content-center justify-center bg-transparent'}>                
                {title} | <Image src={image} alt={''} className={'w-6 h-6 mx-2 rounded-full'} width={300} height={300} /> {name}
            </li>

            <Drawer.Root>
                <Drawer.Trigger asChild>
                    <button ref={buttonRef} hidden>Open</button>
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className={'fixed inset-0 bg-black/40'} />
                    <Drawer.Content className={'outline-none bg-zinc-100 flex h-5/6 flex-col items-center content-center justify-center rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0'}>
                        <div className={'p-4 bg-white overflow-auto w-full flex-1 rounded-t-[10px] flex flex-col items-center content-center justify-center'}>
                            <div className={'cursor-grab mx-auto w-12 h-1.5 flex-shrink-0 absolute top-5 rounded-full bg-zinc-300 mb-8'}></div>

                            <p className={'h-5/6 w-5/6 text-justify overflow-auto'}>{description}</p>
                            <Apply link={link} />
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>

            <ToastContainer autoClose={3000} hideProgressBar theme={'colored'} newestOnTop stacked />
        </>
    )
}