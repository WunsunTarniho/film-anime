export default function HeaderMenu({ title,  page }) {
    return (
        <div className="p-5 text-color-primary font-bold text-center md:text-2xl text-xl">{title} #{page}</div>
    )
}