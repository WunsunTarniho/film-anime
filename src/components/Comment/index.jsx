'use client'

import Header from '@/components/Comment/Header'
import Content from '@/components/Comment/Content'
import { useEffect, useState } from 'react'
import comment from '@/app/controller/comment'

export default function Comment({ anime_id }) {

    const [comments, setComments] = useState([]);
    
    const getComments = async () => {
        const comments = await comment.all({ anime_id });

        if(comments.status == 401) return false;
        setComments(comments?.data);
    }

    useEffect(() => {
        getComments();
    }, []);

    return (
        <div className="m-5 rounded bg-color-primary">
            <Header anime_id={anime_id} getComments={getComments} />
            <Content comments={comments} />
        </div>
    )
}