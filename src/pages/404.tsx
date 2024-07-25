import { Link, HeadFC } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/common/Seo'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px 0;
`

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const Description = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const PageLink = styled(Link)`
  margin-top: 30px;
  font-size: 15px;
  color: inherit;
`

export default function NotFoundPage() {
  return (
    <Wrapper>
      <Title>페이지를 찾을 수 없습니다.</Title>
      <Description>다른 콘텐츠를 보러 가보시겠어요?</Description>
      <PageLink to="/">메인 페이지로</PageLink>
    </Wrapper>
  )
}

export const Head: HeadFC = () => <SEO />
