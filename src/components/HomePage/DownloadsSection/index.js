import React from 'react'
import { Section } from './elements';
import Video from '../../../assets/videos/production-1080p.mp4';

const DownloadsSection = () => {
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      // document.getElementById('video').src = `${Video}`;
    });
  })

  return (
    <Section id='downloads'>

    </Section>
  )
}

export default DownloadsSection
