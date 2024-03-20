'use client'

import { config } from '@/extra/config'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Job from '@/components/core/Job'

export default function Grid() {
    const [index, setIndex] = useState(0)
    const [jobs, setJobs] = useState<any>([])
    
    const FetchJobs = async () => {
        const response = await axios.post('/api/all')
        
        if (response.status === 200) {
            setIndex(response.data.jobs.length)
            response.data.jobs.forEach((item) => {
                console.log(item)

                setJobs(prevJobs => [...prevJobs, {
                    title: item.title,
                    description: item.description,
                    remote: item.remote,
                    location: item.location,
                    name: item.author.name,
                    link: item.link,
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
                {jobs.map(({ title, image, description, remote, location, name, link }, index) => (
                    <Job title={title} image={image} description={description} link={link} remote={remote} location={location} name={name} key={index} />
                )).slice(0, index)}
            </ul>
        </>
    )
}