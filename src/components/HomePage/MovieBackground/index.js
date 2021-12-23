import React from 'react'
import Video1 from '../../../assets/videos/hero-page-1080p.mp4';
import Video2 from '../../../assets/videos/production-1080p.mp4';
import { Background, VideoMovie } from './elements';

const MovieBackground = () => {
  const [video, setVideo] = React.useState(Video1);

  const changeVideo = () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      const sectionTop = section.offsetTop;

      if (window.pageYOffset >= sectionTop) {
        let currentSection = section.getAttribute('id');
        (currentSection === 'home') ? setVideo(Video1) : setVideo(Video2);
      }
    });
  }

  React.useEffect(() => {
    window.addEventListener('scroll', changeVideo);
  }, [])

  return (
    <Background>
      <VideoMovie type='video/mp4' id='video' src={video} autoPlay loop muted />
    </Background>
  )
}

export default MovieBackground 
