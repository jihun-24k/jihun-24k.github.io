import styled from 'styled-components'
import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import useRenderPreview from '../../hooks/useRenderPreview'

type PostItemProps = {
  title: string
  date: string
  category: string[]
  thumbnail: IGatsbyImageData
  content: Queries.ContentfulPostContent
  slug: string
}

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  max-height: 2.4em;
  font-size: 25px;
  font-weight: 500;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2em;
  margin-top: 10px;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 5px;
  font-size: 14px;
  font-weight: 500;

  // 내부의 div 요소 스타일 정의
  & > div {
    transition: background-color 0.3s ease;
    background-color: #CCEEFF;
    padding: 1px 5px;
    border-radius: 5px;
  }
`

const Wrapper = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 32px 0px;
  overflow: hidden;
  width: 768px;
  height: auto;
  border-bottom: 1.5px solid #e0e0e0;
  text-decoration: none;
  color: inherit;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover ${Title} {
    color:  #87CEEB;
  }

  &:hover ${Category} {
    & > div {
      color: #87CEEB;
      padding: 1px 5px;
      border-radius: 5px;
    }
  }
`

const Thumbnail = styled.div`
  display: grid;
  place-items: end;
  border-radius: 20px;
  overflow: hidden;
  height: 150px;
  width: 150px;
  min-height: 150px;
  min-width: 150px;
`

const Contents = styled.div`
  width: calc(100% - 170px);
`

const Content = styled.div`
  display: -webkit-box;
  overflow: hidden;
  max-height: 3.4em;
  margin-top: 15px;
  font-size: 15px;
  font-weight: 300;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.2em;
`

const Date = styled.div`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 200;
`

export default function PostItem({
  title,
  date,
  category,
  thumbnail,
  content,
  slug,
}: PostItemProps) {
  const richText = useRenderPreview(content)

  return (
    <Wrapper to={slug as string}>
      <Contents>
        <Category>
          {category?.map(category => <div key={category}>{category}</div>)}
        </Category>
        <Title>{title}</Title>
        <Content>{richText}</Content>
        <Date>{date}</Date>
      </Contents>

      <Thumbnail>
        <GatsbyImage
          image={thumbnail}
          alt={title as string}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Thumbnail>
    </Wrapper>
  )
}