import styled from 'styled-components'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ImageProps = {
  image: IGatsbyImageData
  alt: string
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 30px 0;
  max-width: 774px;
`

const Content = styled(GatsbyImage)`
  margin-top: 30px;
  margin-bottom: 10px;

  & + & {
    margin: -20px 0 30px 0;
  }
`

const Caption = styled.p`
  font-size: 13px;
  color: #313131;
  text-align: center;

  @media(max-width: 768px) {
    font-size: 11px;
  }
`

export default function Image({ image, alt }: ImageProps) {
  return <Wrapper>
      <Content image={image} alt={alt} />
      {alt && <Caption>{alt}</Caption>}
    </Wrapper>
}