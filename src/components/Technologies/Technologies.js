import React from "react";
import {
  DiAndroid,
  DiApple,
  DiAws,
  DiBootstrap,
  DiCode,
  DiCodeigniter,
  DiCss3,
  DiDart,
  DiDocker,
  DiFirebase,
  DiGithub,
  DiHtml5,
  DiIllustrator,
  DiJavascript,
  DiLinux,
  DiMsqlServer,
  DiMysql,
  DiNodejs,
  DiPhp,
  DiReact,
  DiUnitySmall,
  DiWindows,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a few technologies in the web development and mobile app
      development world such as React Native, Laravel, Codeigniter and React.js.
      I have also worked with NoSQL databases such as MongoDB and I felt in love
      with it.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiJavascript size="3rem" />
          <DiDart size="3rem" />
          <DiPhp size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
            Experience with JavaScript (ES6), Typescript, Java, HTML, CSS, PHP, Dart, C# and
            C++.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <DiNodejs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Javascript Framework</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Node.js <br />
            Next,js and Feather.js.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMysql size="3rem" />
          <DiMsqlServer size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySQL, MariaDB, MS SQL <br />
            and MongoDB.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <DiAndroid size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            React Native, Flutter, <br />
            Huawei, iOS and Android <br />
            deployment.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
          <DiCodeigniter size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web App Framework</ListTitle>
          <ListParagraph>
            Experience with <br />
            laravel, Codeigniter, <br />
            React.js, and Next.js.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiWindows size="3rem" />
          <DiApple size="3rem" />
          <DiLinux size="2.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Operating System</ListTitle>
          <ListParagraph>
            Experience with <br />
            Linux (Ubuntu and Pop Os), <br />
            Windows and MacOS.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAws size="3rem" />
          <DiDocker size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps Infra</ListTitle>
          <ListParagraph>
            Experience with AWS, <br />
            Azure, Docker, PM2 <br />
            and Digital Ocean.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGithub size="3rem" />
          <DiAws size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
            Experience with Github, <br />
            AWS CodeCommit and <br />
            and Azure Repos.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3 size="3rem" />
          <DiBootstrap size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>CSS Framework</ListTitle>
          <ListParagraph>
            Experience with Bootstrap 4, <br />
            Theme UI, Ant Design and <br />
            and Material UI.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Content Management System</ListTitle>
          <ListParagraph>
            Experience with Contentstack <br />
            and Sanity.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
