'use client'

import { ArrowSquareRight } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function Header(){

    const router = useRouter();

    return (
        <div className="flex justify-between items-center">
            <h3 className="text-color-primary font-bold md:text-2xl text-xl">My Collection</h3>
            <ArrowSquareRight size={35} className="text-color-primary cursor-pointer hover:scale-110 transition-all" onClick={() => router.back()} />
        </div>
    )
}