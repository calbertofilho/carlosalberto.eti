import React from 'react'
import { Background, VideoMovie } from './elements';
import Video1 from '../../../assets/videos/hero-page-1080p.mp4';
import Video2 from '../../../assets/videos/production-1080p.mp4';

const MovieBackground = () => {
  document.getElementById('video1').style.display = 'block'
  document.getElementById('video2').style.display = 'none'

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
  
        if (window.pageYOffset >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });
      if (currentSection === 'home') {
        document.getElementById('video1').style.display = 'block'
        document.getElementById('video2').style.display = 'none'
      } else {
        document.getElementById('video1').style.display = 'none'
        document.getElementById('video2').style.display = 'block'
      }

      // var source = document.getElementById('video').currentSrc;
      // var newSource1 = `${Video1}`;
      // var newSource2 = `${Video2}`;
      // var currentVideo = source.substring(source.lastIndexOf("/") + 1, source.length);
      // var newVideo1 = newSource1.substring(newSource1.lastIndexOf("/") + 1, newSource1.length);
      // var newVideo2 = newSource2.substring(newSource2.lastIndexOf("/") + 1, newSource2.length);

      // if ((currentSection === 'home') && (currentVideo !== newVideo1))
      //   document.getElementById('video1').src = `${Video1}`;
      // else if ((currentSection !== 'home') && (currentVideo !== newVideo2))
      //   document.getElementById('video2').src = `${Video2}`;

    });
  })

  return (
    <Background>
      <VideoMovie id='video1' src={Video1} autoPlay loop muted />
      <VideoMovie id='video2' src={Video2} autoPlay loop muted />
    </Background>
  )
}

export default MovieBackground 
