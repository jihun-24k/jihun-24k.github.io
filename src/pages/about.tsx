import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'
import useRenderRichText from '../hooks/useRenderRichText';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 40px;
`

const ProfileImage = styled.div`
  overflow: hidden;
  width: 140px;
  height: 140px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const Title = styled.div`
    font-size: 30px;
    font-weight: 700;

    @media (max-width: 1024px) {
        font-size: 25px;
    }

    @media (max-width: 768px) {
        font-size: 20px;
    }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  font-size: 16px;
  line-height: 2;
  word-break: break-all;
  color: #313131;

  p {
    margin-bottom: 1.5em;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    gap: 50px;
    font-size: 14px;
    line-height: 1.8;
  }
`

const AboutPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout {
        title
        info {
          raw
        }
        content {
          raw
        }
      }
    }
  `);
    
    const info = useRenderRichText(data.contentfulAbout.info);
    const richTextContent = useRenderRichText(data.contentfulAbout.content);

  return (
      <>
          <Wrapper>
              <div>
                <ProfileImage>
                    <StaticImage src="../images/thumbnail.jpeg" alt="Profile Image" />
                </ProfileImage>
                <Title>진심이 담긴 개발자, 김지훈입니다</Title>
              </div>
              <div>{info}</div>
        </Wrapper>
        <Content>{richTextContent}</Content>
    </>
  );
};

export default AboutPage;