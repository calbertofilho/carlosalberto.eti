import React from 'react';
import { BtnWrapper, Button, Column1, Column2, Content, Heading, Img, ImgWrapper, Paragraph, Row, Section, Emphasis, Wrapper } from './elements';
import Image from '../../assets/images/undraw_businessman_re_mlee.svg';

const AboutSection = () => {
  return (
    <Section id='about'>
      <Content>
        <Row>
          <Column1>
           <Wrapper>
             <Emphasis>Premium Bank</Emphasis>
             <Heading>Unlimited transactions with zero fees</Heading>
             <Paragraph>Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.</Paragraph>
             <BtnWrapper>
               <Button to='/'>Get Started</Button>
             </BtnWrapper>
           </Wrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={Image} alt='avatar' />
            </ImgWrapper>
          </Column2>
        </Row>
      </Content>
    </Section>
  )
}

export default AboutSection
