export default function Pagination({page, lastPage, setPage}){

    const scrollTop = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0,
        })
    }

    const handleNextPage = () => {
        setPage(prev => prev + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage(prev => prev - 1)
        scrollTop()
    }

    return (
        <div className="flex justify-center items-center gap-3 p-5 md:text-xl text-md text-color-primary">
            {page != 1 ? <button className='hover:text-color-accent transition-all' onClick={handlePrevPage}>Prev</button> : null}
            <p>{page} of {lastPage}</p>
            <button className="hover:text-color-accent transition-all" onClick={handleNextPage}>Next</button>
        </div>
    )
}