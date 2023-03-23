import React from 'react';
import './App.scss';
import CurrentRunnigVideo from './Components/CurrentRunnigVideo/CurrentRunnigVideo';
import VideoLibrary from './Components/VideoLibrary/VideoLibrary';
import { createContext, useState } from "react";

export const currentRunnigVideoContext= createContext(null);  //useContext to get the user selected video to play

export default function App(){
  const [currentRunnigVideo, setCurrnetRunningVideo] = useState(0);  //Initially the first video from the video library will be playing
  const value = [currentRunnigVideo, setCurrnetRunningVideo]  //the required values are stored in the 'value' and using provider we can access it any where in the application
    return (
      <currentRunnigVideoContext.Provider value={value}> 
        <div>
        <CurrentRunnigVideo/>
        <VideoLibrary/>
        </div>
      </currentRunnigVideoContext.Provider>
    )
  }

  
