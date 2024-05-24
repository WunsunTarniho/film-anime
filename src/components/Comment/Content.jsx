export default function Content({ comments }) {
    const diffForHumans = date => {
        let different = Math.floor((new Date() - new Date(date)) / 1000);

        let interval = Math.floor(different / 31536000);

        if (interval > 0) {
            return interval + " years ago";
        }

        interval = Math.floor(different / 2592000);

        if (interval > 0) {
            return interval + " months ago";
        }

        interval = Math.floor(different / 86400);
        if (interval > 0) {
            return interval + " days ago";
        }

        interval = Math.floor(different / 3600);
        if (interval > 0) {
            return interval + " hours ago";
        }

        interval = Math.floor(different / 60);
        if (interval > 0) {
            return interval + " minutes ago";
        }

        if (!different) return 'Baru saja';

        return Math.floor(different) + " seconds ago";
    }

    return (
        <>
            {
                (comments.length) ?
                    <div className="h-48 overflow-auto">
                        {
                            comments?.map(comment => {
                                return (
                                    <div key={comment.id} className="px-4 py-4 border-y border-color-dark">
                                        <div className="md:text-md text-sm px-1 md:px-2 font-bold">{comment.user.name}</div>
                                        <div className="md:text-md text-sm p-1 md:p-2 font-normal">{comment.content}</div>
                                        <div className="md:text-md text-xs px-1 md:px-2">{diffForHumans(comment.created_at)}</div>
                                    </div>
                                )
                            })
                        }
                    </div> : null
            }
        </>
    )
}