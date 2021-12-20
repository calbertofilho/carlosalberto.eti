import React from 'react';
import Video from '../../assets/videos/hero-page-1080p.mp4';
import { ArrowForward, ArrowRight, Background, BtnWrapper, Button, Container, Content, Heading, Paragraph, VideoMovie, Wrapper } from './elements';

const HeroSection = () => {
  const [hover, setHover] = React.useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Container>
      <Background>
        <VideoMovie type='video/mp4' src={Video} autoPlay loop muted />
      </Background>
      <Wrapper>
        <Content>
          <Heading>Carlos Alberto ETI</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel neque a erat placerat dictum sed vitae eros. Nullam tincidunt efficitur tortor, eget varius purus consequat id. Fusce sagittis lacus.</Paragraph>
          <BtnWrapper>
            <Button to='/' onMouseEnter={onHover} onMouseLeave={onHover}>Hire me { hover ? <ArrowForward /> : <ArrowRight /> }</Button>
          </BtnWrapper>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default HeroSection
