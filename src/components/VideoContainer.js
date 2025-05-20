import React, { useEffect, useState } from 'react';
import { youtube_videos_API } from '../utils/constants';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(youtube_videos_API);
      const json = await data.json();
      console.log(json.items); // Check if this logs an array
      setVideos(json?.items || []); // Safely assign or fallback to empty array
    } catch (error) {
      console.error('Failed to fetch videos:', error);
      setVideos([]);
      console.log("API KEY => ", process.env.REACT_APP_GOOGLE_API_KEY);
 // Prevent app crash on fetch error
    }
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((item) => (
        <Link key={item.id} to={`/watch?v=${item.id}`}>
          <VideoCards info={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
