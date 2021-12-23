import React from 'react';
import { ArrowForward, ArrowRight, BtnWrapper, Button, Section, Content, Heading, Paragraph, Container } from './elements';

const HeroSection = () => {
  const [hover, setHover] = React.useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Section id='home'>
      <Container>
        <Content>
          <Heading>Carlos Alberto</Heading>
          <Paragraph>
            Cientista da computação, formado bacharel pela Universidade de Fortaleza - UNIFOR em 2007.<br />
            Freelancer experiente, atuando a { (new Date().getFullYear()) - 2007 } anos, na área de desenvolvimento de websites e softwares, e atualmente estudando desenvolvimento de jogos.<br />
            Espero lhe ajudar com soluções digitais criativas, ágeis, bonitas e personalizadas em seu projeto.
          </Paragraph>
          <BtnWrapper>
            <Button to='contact' onMouseEnter={onHover} onMouseLeave={onHover}>Contato { hover ? <ArrowForward /> : <ArrowRight /> }</Button>
          </BtnWrapper>
        </Content>
      </Container>
    </Section>
  )
}

export default HeroSection
