import React, { useContext } from 'react';
import './VideoCard.scss';
import { currentRunnigVideoContext } from '../../App';


export default function VideoCard({videoData,currentIndex}) {

    // using useContext getting the required values and destructuring those values below from the value
    const value = useContext(currentRunnigVideoContext);
    const [currentRunnigVideo, setCurrnetRunningVideo] = value;
    
    // updating the current runnibg video index
    const handleCurrentRunningVideo = () =>
    {
        setCurrnetRunningVideo(currentIndex);   //update currentRunnigVideo and access this in the other required component  
    }
  return (
    <div className='videoCard_container'>
      <div>
        {/* Thumb nails of the videos */}
        <img className='videoCard_videoThumbNail' onClick={handleCurrentRunningVideo} src={videoData.thumbNailrSrc} alt='thumb nail'/>
      </div>

      {/* video description */}
      <div className='videoCard_video-details'>
        <div className='videoCard_title'>{videoData.title}</div>
        <div className='videoCard_desc'>{videoData.desc}</div>
      </div>
    </div>
  )
}
