import Link from "next/link";
import { Auth } from '@/libs/auth-libs';

export default async function AuthButton() {
    const user = await Auth.user();
    
    return (
        <Link href={`http://localhost:3000/api/auth/${user ? 'signout' : 'signin'}`} className="px-4 py-2 bg-color-dark text-color-accent md:text-right text-center">{ user ? 'Log Out' : 'Sign In'}</Link>
    )
}