import React from 'react'

const VideoCards = ({info}) => {
   
    const {snippet,statistics} = info;
    const {channelTitle, title , thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-sm'>
        <img className='rounded-lg' alt ='thumbnails' src = {thumbnails.medium.url} />
        <ul>
            <li className="font-bold">
                {title}
            </li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} Views</li>
        </ul>
        
        </div>
  )
}

export default VideoCards