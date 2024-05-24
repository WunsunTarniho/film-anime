import Link from "next/link";
import InputSearch from "./InputSearch";
import AuthButton from './AuthButton';
import Image from "next/image";
import { Auth } from "@/libs/auth-libs";

export default async function Navbar() {

    const user = await Auth.user();

    return (
        <header className="sticky top-0 z-50 p-4 bg-color-accent flex md:items-center justify-between md:flex-row flex-col gap-2">
            <Link href='/' className="font-bold md:text-2xl text-xl text-white">FilmAnime</Link>
            <div className="flex gap-4 md:flex-row flex-col md:items-center items-stretch">
                <div className="flex flex-row items-center gap-4">
                    {
                        user ?
                            <Link href='/users/dashboard'>
                                <Image src={user?.image} alt={user?.name} className="rounded-full" width={50} height={50} />
                            </Link>
                            : null
                    }
                    <InputSearch />
                </div>
                <AuthButton />
            </div>
        </header>
    )
}