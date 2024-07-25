import styled from 'styled-components'
import { GatsbyLinkProps, Link } from 'gatsby'
import useTableOfContents from '../../hooks/useTableOfContents'

type TableOfContentsProps = {
  content: Queries.ContentfulPostContent
}

const Wrapper = styled.div`
  position: sticky;
  top: 100px;
  width: 220px;

  @media (max-width: 1024px) {
    display: none;
  }
`

const Title = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid;
  font-size: 15px;
  font-weight: 600;
`

const Items = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 20px;
`

const Item = styled(({ className, children, to }: GatsbyLinkProps<unknown>) => (
  <Link to={to} className={className}>
    {children}
  </Link>
))<{ $depth: number; $focused: boolean }>`
  padding-left: ${({ $depth }) => $depth * 10}px;
  font-size: 13px;
  font-weight: ${({ $focused }) => ($focused ? 700 : 300)};
  color: ${({ $focused }) => ($focused ? 'rgba(135, 206, 235, 1)' : 'rgba(30, 31, 33, 0.5)')};
  cursor: pointer;
  text-decoration: none;
  transition: 0.1s all;
`

export default function TableOfContents({
  content: { raw },
}: TableOfContentsProps) {
  const { toc, activeId } = useTableOfContents(raw as string)

  return (
    <Wrapper>
      <Title>이 글의 목차</Title>
      <Items>
        {toc.map(({ id, title, depth }) => (
          <Item
            to={`#${id}`}
            key={id}
            $depth={depth}
            $focused={id === activeId}
          >
            {title}
          </Item>
        ))}
      </Items>
    </Wrapper>
  )
}