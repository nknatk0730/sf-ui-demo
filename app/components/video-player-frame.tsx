'use client';

import dynamic from "next/dynamic";

const VideoPlayer = dynamic(() => import('./video-player').then((mod) => mod.VideoPlayer), {
  ssr: false,
})


export const VideoPlayerFrame = () => {
  return (
    <VideoPlayer />
  )
}