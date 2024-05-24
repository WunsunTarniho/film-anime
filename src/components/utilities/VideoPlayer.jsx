'use client'

import { useEffect } from 'react'
import YouTube from 'react-youtube'

export default function VideoPlayer({ videoID }){

    function scrollTop(){
        scrollTo({
            top: 0,
        })
    }

    useEffect(() => {
        scrollTop();
    }, [])

    return (
        <YouTube videoId={videoID} onReady={e => e.target.pauseVideo()}
        opts={
            {
                width: '280',
                height: '180',
            }
        }/>
    )
}