import { AnchorHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

type LinkProps = {
  children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

const Component = styled.a`
  color: #3399FF;
  text-decoration: underline;
`

export default function Link({ children, ...props }: LinkProps) {
  return <Component {...props}>{children}</Component>
}