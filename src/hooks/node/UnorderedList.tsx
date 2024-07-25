import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

type ListProps = {
  children: ReactNode
} & HTMLAttributes<HTMLUListElement>

const List = styled.ul`
  margin: 4px 0px 4px 20px;
`

export default function UnorderedList({ children, ...props }: ListProps) {
  return <List {...props}>{children}</List>
}