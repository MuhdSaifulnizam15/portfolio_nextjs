import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle maincenter>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi, My Name is Muhd Saiful. I am a Software Developer. Currently working at iSoftStone Sdn Bhd as an Application Developer (Fullstack). 
      </SectionText>
      <Button href="https://saiful-personal-bucket.s3.us-east-2.amazonaws.com/Resume.pdf">Get Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;