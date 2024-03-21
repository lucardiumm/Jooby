'use client'

import { useCallback, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { PublishType } from '@/types/includes'
import { IoIosCheckmark } from 'react-icons/io'
import { useDropzone } from '@uploadthing/react'
import { FaImage } from 'react-icons/fa6'

export default function Form({ session }: PublishType) {
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [tags, setTags] = useState<string[]>()
    const [link, setLink] = useState('')
    const [remote, setRemote] = useState(false)

    const router = useRouter()

    const Press = async () => {
        const response = await axios.post('/api/create', {
            title: title,
            tags: tags,
            location: location,
            link: link,
            remote: remote,
            description: description,
            email: session?.user?.email,
        })

        if (response.status === 200) {
            router.push('/')
        }
    }

    return (
        <ul className={'items-center content-center justify-center flex flex-col list-none overflow-y-scroll'}>
            <li className={'my-2'}>
                <input placeholder={'Titulo'} minLength={5} maxLength={50} type={'text'} className={'border-2 outline-none p-3 border-light rounded-xl bg-white w-72 text-dark font-medium text-sm h-14 md:w-80'} value={title} onChange={(e) => setTitle(e.target.value)} />
            </li>
            <li className={'my-2'}>
                <input placeholder={'Ubicacion'} minLength={5} maxLength={50} type={'text'} className={'border-2 outline-none p-3 border-light rounded-xl bg-white w-72 text-dark font-medium text-sm h-14 md:w-80'} value={location} onChange={(e) => setLocation(e.target.value)} />
            </li>
            <li className={'my-2'}>
                <textarea placeholder={'Descripcion'} minLength={300} maxLength={5000} value={description} onChange={(e) => setDescription(e.target.value)} className={'w-72 md:w-80 h-60 text-dark font-medium text-sm resize-none border-2 border-light outline-none border-b-4 rounded-xl p-3'}></textarea>
            </li>
            <li className={'my-2'}>
                <input placeholder={'Link de la aplicacion'} minLength={5} maxLength={50} type={'text'} className={'border-2 outline-none p-3 border-light rounded-xl bg-white w-72 text-dark font-medium text-sm h-14 md:w-80'} value={link} onChange={(e) => setLink(e.target.value)} />
            </li>
            <li className={'my-4'}>
                <button onClick={Press} className={'flex text-white font-semibold shadow-mee w-32 flex-row h-12 rounded-full items-center content-center justify-center bg-mee'}>                
                    <BsPlus className={'mr-2 font-semibold text-xl'} />
                </button>
            </li>
        </ul>
    )
}