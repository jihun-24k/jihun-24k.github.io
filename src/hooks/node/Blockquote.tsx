import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

type BlockquoteProps = {
  children: ReactNode
} & HTMLAttributes<HTMLQuoteElement>

const Component = styled.blockquote`
  margin-top: 0;
  margin-bottom: 1rem;
  padding: 0 1em;
  border-left: 0.25em solid #dfe2e5;
  color: #6a737d;
`

export default function Blockquote({ children, ...props }: BlockquoteProps) {
  return <Component {...props}>{children}</Component>
}