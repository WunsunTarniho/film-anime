'use client'

import { PaperPlaneTilt } from "@phosphor-icons/react";
import Comment from '@/app/controller/comment'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header({ anime_id, getComments }) {

    const router = useRouter();
    const [commentUser, setCommentUser] = useState('');

    const addComment = async () => {
        const data = await Comment.store({ anime_id, commentUser });

        if(data.status == 200){
            setCommentUser('')
            getComments();
        }else if(data.status == 401){
            router.push('/api/auth/signin')
        };
    }

    return (
        <div className="w-full px-4 py-2 border-b">
            <div className="text-color-dark md:text-md text-sm font-bold py-2">Comment</div>
            <div className="relative">
                <textarea className="rounded p-4 border border-color-dark md:text-md text-sm w-full outline-none transition-all" onChange={e => setCommentUser(e.target.value)} value={commentUser}></textarea>
                <PaperPlaneTilt size={30} className="absolute rounded text-color-dark font-bold bg-color-accent cursor-pointer p-1.5 end-4 top-1/2 -translate-y-1/2 hover:scale-105 transition-all" onClick={() => addComment()} />
            </div>
        </div>
    )
}