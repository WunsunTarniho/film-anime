'use client'

import { Folders } from "@phosphor-icons/react";
import Link from "next/link";


export default function NotCollection(){
    return (
        <div className="flex flex-col items-center justify-center gap-3 w-full" style={{ minHeight: '80vh' }}>
            <Folders size={45} className="text-color-accent" />
            <h1 className="text-color-accent font-bold md:text-2xl text-xl">You Don&apos;t Have Collection Yet</h1>
            <Link href={'/'} className="text-color-primary hover:text-color-accent transition-all underline">Get Your Collection</Link>
        </div>
    )
}