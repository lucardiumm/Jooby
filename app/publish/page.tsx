import Publish from '@/components/pages/Publish'
import { auth } from '@/lib/auth'
import { getServerSession } from 'next-auth'

export default async function Page() {
    const session = await getServerSession(auth)

    return (
        <Publish session={session} />
    )
}