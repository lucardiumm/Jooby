'use client'

import { config } from '@/extra/config'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Note from '@/components/core/Note'

export default function Grid() {
    const [notes, setNotes] = useState<any>([])
    
    const FetchJobs = async () => {
        const response = await axios.post('/api/all')
        
        if (response.status === 200) {
            response.data.jobs.forEach((item) => {
                console.log(item)

                setNotes([...notes, {
                    title: item.title,
                    description: item.description,
                    remote: item.remote,
                    location: item.location,
                    name: '',  // item.user.name,
                    link: item.link,
                    image: '', // item.user.image,
                }])
            })
        }
    }

    useEffect(() => {
        FetchJobs()
    }, [])

    return (
        <>  
            <ul className={'flex bg-transparent flex-col items-center content-center justify-center w-full h-80 md:w-3/6 overflow-y-scroll'}>
                {notes.map(({ title, image, description, remote, location, name, link }, index) => (
                    <Note title={title} image={image} description={description} link={link} remote={remote} location={location} name={name} key={index} />
                ))}
            </ul>
        </>
    )
}