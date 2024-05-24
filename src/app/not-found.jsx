'use client'

import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

export default function Page(){

    const router = useRouter();

    const handleBack = () => {
        return router.back();
    }

    return (
        <div className="min-h-screen max-w-xl mx-auto flex items-center justify-center flex-col gap-3">
            <FileSearch size={32} className="text-color-accent"/>
            <h3 className="text-color-accent text-2xl font-bold">404 | Not Found</h3>
            <button className="text-color-primary hover:text-color-accent transition-all underline" onClick={handleBack} >Kembali</button>
        </div>
    )
}