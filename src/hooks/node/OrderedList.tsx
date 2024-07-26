import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

type ListProps = {
  children: ReactNode
} & HTMLAttributes<HTMLOListElement>

const List = styled.ol`
  margin: 4px 0px 8px 20px;

  ul p,
  ol p,
  li p {
    margin-bottom: 0;
  }
`

export default function OrderedList({ children, ...props }: ListProps) {
  return <List {...props}>{children}</List>
}