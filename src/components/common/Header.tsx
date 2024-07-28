import { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`

const Title = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`

const Menu = styled.div`
  display: flex;
  gap: 15px;
  font-size: 20px;
  font-weight: 500;
  padding-bottom: 1;

  & > a {
    display: flex;
    color: initial;
    text-decoration: none;
    cursor: pointer;

    &:hover,
    &.active {
      border-bottom: 2px solid #CCEEFF;
      transition: color 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Article = styled(Link)`
`

const About = styled(Link)`
` 

const Highlight = styled.span`
  color: #87CEEB;
`

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <Wrapper>
      <Title to="/">
        <Highlight>"</Highlight>JiHun<Highlight>"</Highlight> Blog
      </Title>
      <Menu>
        <Article to="/" className={activeLink === '/' ? 'active' : ''}>
          Articles
        </Article>
        <About to="/about" className={activeLink === '/about/' ? 'active' : ''}>
          About
        </About>
      </Menu>
    </Wrapper>
  )
}

export default Header