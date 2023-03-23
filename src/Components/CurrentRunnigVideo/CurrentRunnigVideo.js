import React, {useContext, useEffect, useRef, useState} from 'react';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import download from '../../images/assets/download.svg';
import share from '../../images/assets/Share.svg';
import favorite from '../../images/assets/fav.svg';
import notes from '../../images/assets/take_notes.svg';
import { currentRunnigVideoContext } from '../../App';
import videoLibraryData from '../../Data';
export default function CurrentRunnigVideo({video}) {
    const [playVideo, setplayVideo]= useState(false);  //to make video play and pause here we maintain its status in this state
    const videoRef = useRef();   //to store the video reference 
    const value = useContext(currentRunnigVideoContext);  //consuming the value(it has video source) from the currentRunningVideo context and using it here to play the video
    const [videoDuration, setVideoDuration] = useState()
    // set the video status play and this get triggered when click on the play button
    const handlePlay=()=>
    {
        videoRef.current.play();  //using the video reference we play the video
        console.log(videoRef.current.duration,'duration');
    }

    // set the video status pause and this get triggered when click on the pause button
    const handlePause =()=>
    {
        videoRef.current.pause();  //using the video reference we play the video
    }

    // Here we load the new video and make it play initially and this get triggered when ever the new video loads
    useEffect(()=>{
        videoRef.current.load();  //load the video
        videoRef.current.play();  //play the video
        setplayVideo(false);
        setVideoDuration(videoRef.current.duration)
        
        
    },[videoLibraryData[value[0]].videoSrc]);

    console.log(videoDuration)
    

  
    return (
        <div>
            {/* video tag to provide video via its source  and store its reference in videoRef*/}
            <video width="100%" height="320" ref={videoRef} controls title="Advertisement" autoPlay={true} muted="muted" loop>
                <source src= {videoLibraryData[value[0]].videoSrc} type="video/mp4"  />
            </video>
            
            {/* video title and its description */}
            <div class="currentRunningVideo_video-desc">
                <div className='currentRunningVideo_desc-align'>
                    <div className='currentRunningVideo_heading'>Dinacharya |</div>
                    <div className='currentRunningVideo_title'>{videoLibraryData[value[0]].title} |</div>
                    <div className='currentRunningVideo_desc'>{videoLibraryData[value[0]].desc} | {Math.floor(videoRef.current?.duration)} sec</div>
                    <div className='currentRunningVideo_duration'></div>
                </div>
            </div>

            {/* button to toggle the videp status */}
            <div className='currentRunningVideo_play'>
                <button id='currentRunningVideo_status-button' onClick={()=>{setplayVideo(!playVideo)}}>{playVideo?<span className='currentRunningVideo_video-status' onClick={handlePlay}> <PlayArrowIcon/>Play</span>:<span className='currentRunningVideo_video-status' onClick={handlePause}> <PauseIcon/>Pause</span>}</button> 
            </div>

            {/* some static options about the video */}
            <div className='currentRunningVideo_options'>
                <div className='currentRunningVideo_option'>
                    <img className='currentRunningVideo_optionIcon' src={notes} alt='notes icon'/>
                    <div className='currentRunningVideo_optionName'>Notes</div>
                </div>
                <div className='currentRunningVideo_option'>
                    <img className='currentRunningVideo_optionIcon' src={favorite} alt='favorite icpn'/>
                    <div className='currentRunningVideo_optionName'>Like</div>
                </div>

                <div className='currentRunningVideo_option'>
                    <img className='currentRunningVideo_optionIcon' src={download} alt='download icon'/>
                    <div className='currentRunningVideo_optionName'>Download</div>
                </div>
                <div className='currentRunningVideo_option'>
                    <img className='currentRunningVideo_optionIcon' src={share} alt='share icon'/>
                    <div className='currentRunningVideo_optionName'>Share</div>
                </div>
            </div>
            <div className='currentRunningVideo_divider'></div>
        </div>
    )
}
