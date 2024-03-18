'use client'

import { config } from '@/extra/config'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Note from '@/components/core/Note'

export default function Grid() {
    const [index, setIndex] = useState(0)
    const [notes, setNotes] = useState<any>([])
    
    const FetchJobs = async () => {
        const response = await axios.post('/api/all')
        
        if (response.status === 200) {
            setIndex(response.data.notes.length)
            response.data.notes.forEach((item) => {
                console.log(item)

                setNotes(prevNotes => [...prevNotes, {
                    title: item.title,
                    // carrera: item.author.carrera,
                    // facultad: item.author.facultad,
                    description: item.content,
                    remote: '',
                    location: '',
                    name: item.author.name,
                    link: item.images,
                    image: item.author.image,
                }])
            })
        }
    }

    useEffect(() => {
        FetchJobs()
    }, [])

    return (
        <>  
            <ul className={'bg-transparent text-center flex-col h-80 w-auto overflow-y-auto items-center content-center justify-center'}>
                {notes.map(({ title, image, description, remote, location, name, link }, index) => (
                    <Note title={title} image={image} description={description} link={link} remote={remote} location={location} name={name} key={index} />
                )).slice(0, index)}
            </ul>
        </>
    )
}