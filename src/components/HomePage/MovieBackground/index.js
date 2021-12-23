import React from 'react'
import { Background, VideoMovie } from './elements';
import Video from '../../../assets/videos/hero-page-1080p.mp4';

const MovieBackground = () => {
  return (
    <Background>
      <VideoMovie id='video' src={Video} autoPlay loop muted />
    </Background>
  )
}

export default MovieBackground 
