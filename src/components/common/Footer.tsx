import styled from 'styled-components'
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from 'react-icons/ai'

const Wrapper = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: start;
  border-top: 2px solid #CCEEFF;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const Menu = styled.div`
  display: flex;
  gap: 15px;
  font-size: 25px;

  & > a {
    display: flex;
    color: initial;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export default function Footer() {
  return (
    <Wrapper>
      <div>Copyright © 2024 JiHun</div>
      <Menu>
        <a href="https://github.com/jihun-24k" target="_blank">
          <AiFillGithub />
        </a>
        <a href="#" target="_blank">
          <AiOutlineInstagram />
        </a>
        <a href="#" target="_blank">
          <AiFillLinkedin />
        </a>
      </Menu>
    </Wrapper>
  )
}