import React from 'react'
import { Background, VideoMovie } from './elements';
import Video1 from '../../../assets/videos/hero-page-1080p.mp4';
import Video2 from '../../../assets/videos/production-1080p.mp4';

const MovieBackground = () => {
  const sectionVisibleIs = (section) => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;

      if (window.pageYOffset >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });
  
    return (currentSection === section);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      var sourceCurrentVideo = document.getElementById('video').currentSrc;
      var sourceVideo1 = `${Video1}`;
      var sourceVideo2 = `${Video2}`;
      var filenameCurrentVideo = sourceCurrentVideo.substring(sourceCurrentVideo.lastIndexOf("/") + 1, sourceCurrentVideo.length);
      var filenameVideo1 = sourceVideo1.substring(sourceVideo1.lastIndexOf("/") + 1, sourceVideo1.length);
      var filenameVideo2 = sourceVideo2.substring(sourceVideo2.lastIndexOf("/") + 1, sourceVideo2.length);

      if (sectionVisibleIs('home') && (filenameCurrentVideo !== filenameVideo1))
        document.getElementById('video').src = `${Video1}`;
      else if (!sectionVisibleIs('home') && (filenameCurrentVideo !== filenameVideo2))
        document.getElementById('video').src = `${Video2}`;
    });
  })

  return (
    <Background>
      <VideoMovie id='video' src={Video1} autoPlay loop muted />
    </Background>
  )
}

export default MovieBackground 
