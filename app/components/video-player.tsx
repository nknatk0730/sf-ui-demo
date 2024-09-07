'use client';

import ReactPlayer from "react-player"

export const VideoPlayer = () => {
  return (
    <div className="size-full opacity-50">
      <ReactPlayer width='100%' height='100%' url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
    </div>
  )
}