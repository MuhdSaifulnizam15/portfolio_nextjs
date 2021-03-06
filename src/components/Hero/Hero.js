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
      My Name is Muhd Saiful. I am a Front End and Mobile App Developer. Currently working at Azure Innovations Sdn Bhd as a Software Developer.
      </SectionText>
      <Button href="https://saiful-personal-bucket.s3.us-east-2.amazonaws.com/Resume.pdf">Get Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;