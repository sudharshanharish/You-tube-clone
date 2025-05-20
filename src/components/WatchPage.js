import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  console.log("Video ID:", videoId);

  const params = useParams();
  console.log("Params:", params);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full">
      <div className='flex'>

      <div>
      <iframe
        width="1200"
        height="650"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      </div>
      <div>
        <LiveChat/>
      </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
