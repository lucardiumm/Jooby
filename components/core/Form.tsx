'use client'

import { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { PublishType } from '@/types/includes'

export default function Form({ session }: PublishType) {
    const [title, setTitle] = useState('')
    const [remote, setRemote] = useState(true)
    const [link, setLink] = useState('')
    const [location, setLocation] = useState('')
    const [tags, setTags] = useState<any>([])
    const [description, setDescription] = useState('')

    const router = useRouter()

    const Press = async () => {
        const response = await axios.post('/api/create', {
            title: title,
            link: link,
            location: location,
            description: description,
            tags: tags,
            remote: remote,
            email: session?.user?.email,
        })

        if (response.status === 200) {
            router.push('/')
        }
    }

    return (
        <ul className={'items-center content-center justify-center flex flex-col list-none overflow-y-scroll'}>
            <li className={'my-2'}>
                <input placeholder={'Title'} minLength={5} maxLength={50} type={'text'} className={'border-2 outline-none p-3 border-light rounded-xl bg-white w-72 text-dark font-medium text-sm h-14 md:w-80'} value={title} onChange={(e) => setTitle(e.target.value)}  />
            </li>
            <li className={'my-2'}>
                <input placeholder={'Link'} inputMode={'url'} type={'url'} minLength={5} maxLength={50} className={'border-2 outline-none p-3 border-light rounded-xl bg-white w-72 text-dark font-medium text-sm h-14 md:w-80'} value={link} onChange={(e) => setLink(e.target.value)}  />
            </li>
            <li className={'my-2'}>
                <textarea placeholder={'Job description'} minLength={200} maxLength={5000} className={'border-2 border-b-4 my-5 outline-none p-3 border-light rounded-xl bg-white w-72 resize-none text-dark font-medium text-sm h-60 md:w-80'} value={description} onChange={(e) => setDescription(e.target.value)} spellCheck={true} />
            </li>
            <li className={'my-2'}>
                <input placeholder={'Location'} type={'text'} minLength={5} maxLength={50} className={'border-2 outline-none p-3 border-light rounded-xl bg-white w-72 text-dark font-medium text-sm h-14 md:w-80'} value={location} onChange={(e) => setLocation(e.target.value)}  />
            </li>
            <li className={'my-4'}>
                <button onClick={Press} className={'flex text-white font-semibold shadow-mee w-32 flex-row h-12 rounded-full items-center content-center justify-center bg-mee'}>                
                    <BsPlus className={'mr-2 font-semibold text-xl'} />
                </button>
            </li>
        </ul>
    )
}