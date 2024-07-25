import { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'

type CodeProps = {
  isBlock?: boolean
  children: ReactNode
} & HTMLAttributes<HTMLElement>

const InlineCode = styled.code`
  padding: 2px 5px;
  border-radius: 3px;
  font-family: 'Nanum Gothic Coding', monospace;
  color: #3399FF;
  font-weight: 500;
  background: #CCEEFF;
`

const BlockCode = styled.pre`
  margin: 30px 0 !important;
  border-radius: 8px;

  & * {
    font-family: 'Nanum Gothic Coding', monospace !important;
  }
`

export default function Code({
  isBlock = false,
  children,
  ...props
}: CodeProps) {
  if (!isBlock) return <InlineCode {...props}>{children}</InlineCode>
  else
    return (
      <BlockCode>
        <code {...props}>{children}</code>
      </BlockCode>
    )
}