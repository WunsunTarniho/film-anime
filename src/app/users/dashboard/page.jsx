import { Auth } from '../../../libs/auth-libs'
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {

    const user = await Auth.user();

    return (
        <div className="text-color-primary h-screen flex flex-col items-center gap-6 p-6">
            <h1 className='md:text-2xl text-xl'>Profile User</h1 >
            <Image src={user.image} alt={user.name} width={100} height={100} className='rounded-full' />
            <h3 className='md:text-2xl text-xl'>{user.name}</h3>
            <div className='flex gap-4'>
                <Link href='/users/collection' className='bg-color-accent text-color-dark p-2 font-bold'>My Collection</Link>
                <Link href='/users/comments' className='bg-color-accent text-color-dark p-2 font-bold'>My Comment</Link>
            </div>
        </div>
    )
}