import Home from '@/components/pages/Home'
import { auth } from '@/lib/auth'
import { getServerSession } from 'next-auth'

export default async function Page() {
    const session = await getServerSession(auth)

    return (
        <Home session={session} />
    )
}