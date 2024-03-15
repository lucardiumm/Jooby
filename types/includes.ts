import { Session } from 'next-auth'

export type JobType = {
    name: string;
    location: string;
    remote: boolean;
    title: string;
    description: string;
    image: string;
    link: string;
}

export type PublishType = {
    session: Session | null;
}