import { useEffect } from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-java';
import Comment from './Comment'
import TableOfContents from './TableOfContents'
import useRenderRichText from '../../hooks/useRenderRichText'

type PostBodyProps = {
  content: Queries.ContentfulPostContent
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 220px;
  grid-gap: 30px;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 100px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding-top: 60px;
  }
`

const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  width: 768px;
  gap: 100px;
  font-size: 16px;
  line-height: 2;
  word-break: break-word;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    gap: 50px;
    font-size: 14px;
    line-height: 1.8;
  }
`

export default function PostBody({ content }: PostBodyProps) {
  const richText = useRenderRichText(content)

  useEffect(Prism.highlightAll, [])

  return (
    <Wrapper>
      <Content>
        <div id="content">{richText}</div>
      </Content>
      <TableOfContents content={content} />
      <Comment></Comment>
    </Wrapper>
  )
}