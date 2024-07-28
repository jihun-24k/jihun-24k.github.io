import React from 'react';
import { HeadFC, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'
import useRenderRichText from '../hooks/useRenderRichText';
import styled from 'styled-components';
import SEO from '../components/common/Seo'

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

const Info = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
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

  a {
    text-decoration: none;
  }

  p {
    margin-bottom: 1.5em;
  }

  h3 {
    margin: 0;
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

export const Head: HeadFC = () => <SEO
  title='김지훈 | 백엔드 개발자'
  description='이력서 입니다.'
/>

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
              <Info>{info}</Info>
        </Wrapper>
        <Content>{richTextContent}</Content>
    </>
  );
};

export default AboutPage;