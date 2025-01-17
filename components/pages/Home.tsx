'use client'

import { config } from '@/extra/config'
import { useEffect, useRef, useState } from 'react'
import Grid from '@/components/core/Grid'
import Post from '@/components/core/buttons/Post'
import { PublishType } from '@/types/includes'
import Header from '@/components/core/Header'
import { BiLogOut } from 'react-icons/bi'
import { signOut } from 'next-auth/react'

export default function Home({ session }: PublishType) {
    return (
        <>
            <div className={'flex flex-1 gap-10 flex-col w-screen h-screen items-center content-center justify-center bg-white'}>
                {session ? <BiLogOut onClick={() => signOut()} className={'text-cardinal absolute left-7 cursor-pointer top-7 text-2xl'} /> : ''}
                <Header session={session} />
                <Grid />
            </div>
        </>
    )
}