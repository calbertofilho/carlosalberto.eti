import React from 'react'
import { MdHorizontalRule } from "react-icons/md";
import { Card, Heading, ImgDesign, EmphasisParagraph, Paragraph, Section, EmphasisBox, Emphasis, ContentBox } from './elements';
import Image1 from '../../../../assets/images/portfolio1.jpg';
import Image2 from '../../../../assets/images/portfolio2.jpg';
import Image3 from '../../../../assets/images/portfolio3.jpg';
import Image4 from '../../../../assets/images/portfolio4.jpg';
import Image5 from '../../../../assets/images/portfolio5.jpg';
import Image6 from '../../../../assets/images/portfolio6.jpg';

const PortfolioSection = () => {
  return (
    <Section id='portfolio'>
      <EmphasisBox>
        <Emphasis>Portfolio</Emphasis>
        <EmphasisParagraph>
          <MdHorizontalRule /> Veja um pouco dos meus trabalhos já realizados. <MdHorizontalRule />
        </EmphasisParagraph>
      </EmphasisBox>
      <ContentBox>
        <Card>
          <ImgDesign src={Image1} alt='Portfolio Image 1' />
          <Heading>Digital Pioneers in Webdesign</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
        </Card>
        <Card>
          <ImgDesign src={Image2} alt='Portfolio Image 2' />
          <Heading>Deep Digital Agency</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
        </Card>
        <Card>
          <ImgDesign src={Image3} alt='Portfolio Image 3' />
          <Heading>Alex Portfolio</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
        </Card>
        <Card>
          <ImgDesign src={Image4} alt='Portfolio Image 4' />
          <Heading>Daniel Portfolio</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
        </Card>
        <Card>
          <ImgDesign src={Image5} alt='Portfolio Image 5' />
          <Heading>Maqnificure</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
        </Card>
        <Card>
          <ImgDesign src={Image6} alt='Portfolio Image 6' />
          <Heading>Kuon Yagi</Heading>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
        </Card>
      </ContentBox>
    </Section>
  )
}

export default PortfolioSection
