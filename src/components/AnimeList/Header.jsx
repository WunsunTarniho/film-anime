import Link from "next/link";

export default function Header({ title, linkHref }) {
    return (
        <div className="p-4 flex justify-between items-center">
            <h1 className="md:text-2xl font-bold text-xl text-color-primary">{title}</h1>
            { linkHref ? 
                <Link href={linkHref} className="md:text-xl text-sm underline hover:text-color-accent text-color-primary transition-all">Lihat semua</Link>
                :
                null
            }
        </div>
    )
}