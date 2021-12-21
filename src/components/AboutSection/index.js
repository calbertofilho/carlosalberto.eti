import React from 'react'
import { BtnWrapper, Button, Column1, Column2, Content, Heading, Img, ImgWrapper, Paragraph, Row, Section, TopEmphasis, Wrapper } from './elements'

const AboutSection = () => {
  return (
    <Section id='about'>
      <Content>
        <Row>
          <Column1>
           <Wrapper>
             <TopEmphasis>TopLine</TopEmphasis>
             <Heading>Heading</Heading>
             <Paragraph>Subtitle</Paragraph>
             <BtnWrapper>
               <Button to='/'>Button</Button>
             </BtnWrapper>
           </Wrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img />
            </ImgWrapper>
          </Column2>
        </Row>
      </Content>
    </Section>
  )
}

export default AboutSection
