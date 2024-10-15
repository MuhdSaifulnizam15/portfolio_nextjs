import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Status, Flag } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Personal Projects</SectionTitle>
    { projects.length > 0 ? 
        <GridContainer>
          { projects.map((p, i) => {
            return (
              <BlogCard key={i}>
                <Flag status={p.status}>
                  <Status status={p.status}>{p.status}</Status>
                </Flag>
                <Img src={p.image} />
                <TitleContent>
                  <HeaderThree title>{p.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo className="card-info">{p.description}</CardInfo>
                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {p.tags.map((t, i) => {
                      return <Tag key={i}>{t}</Tag>;
                    })}
                  </TagList>
                </div>
                <UtilityList>
                  { p.visit && <ExternalLinks href={p.visit} target="_blank">Code</ExternalLinks> }
                  {p.source && <ExternalLinks href={p.source} target="_blank">Source</ExternalLinks> }
                </UtilityList>
              </BlogCard>
            );
          })}
        </GridContainer>
        :
        <SectionText>No ongoing projects for now. Will be updated.</SectionText>
      }
  </Section>
);

export default Projects;