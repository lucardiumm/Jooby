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
    const [accepted, setAccepted] = useState(false)
    const [description, setDescription] = useState('')
    const [images, setImages] = useState<any>([])

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach(el => {
            var reader = new FileReader()
            reader.readAsDataURL(el)
            reader.onload = () => {
                setImages([...images, reader.result?.toString()])
            }
        })

        setAccepted(true)
    }, [])

    const { getRootProps, isDragActive, isDragAccept, getInputProps } = useDropzone({ 
        onDrop,
        maxFiles: 5,
        multiple: true,
        accept: {
            'image/png': [],
            'image/jpeg': [],
            'image/jpg': [],
            'application/octet-stream': ['.zip'],
        },
        disabled: accepted,
    })

    const router = useRouter()

    const Press = async () => {
        const response = await axios.post('/api/create', {
            title: title,
            images: images,
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
                <input placeholder={'Titulo'} minLength={5} maxLength={50} type={'text'} className={'border-2 outline-none p-3 border-light rounded-xl bg-white w-72 text-dark font-medium text-sm h-14 md:w-80'} value={title} onChange={(e) => setTitle(e.target.value)}  />
            </li>
            <li className={'my-2'}>
                <div 
                    className={'border-2 items-center content-center justify-center flex outline-none border-dotted rounded-2xl border-light w-72 h-40'}
                    {...getRootProps()}
                >
                    <input {...getInputProps()} />
                    {
                        accepted ? <IoIosCheckmark className={'text-feather text-2xl'} /> : <FaImage className={'text-2xl text-gray-400'} />
                    }
                </div>
            </li>
            <li className={'my-4'}>
                <button onClick={Press} className={'flex text-white font-semibold shadow-mee w-32 flex-row h-12 rounded-full items-center content-center justify-center bg-mee'}>                
                    <BsPlus className={'mr-2 font-semibold text-xl'} />
                </button>
            </li>
        </ul>
    )
}