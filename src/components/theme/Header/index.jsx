import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from '../../../providers/ThemeProvider';
import night from '../../../assets/themeIcon/night.svg';
import day from '../../../assets/themeIcon/day.svg';
import { useStaticQuery, graphql } from 'gatsby';
import {
    StyledHeader,
    HeaderWrapper,
    HeaderTitle,
    StyledNav,
    StyledNavList,
    StyledNavListItem,
    StyledButton
} from './styles';

export const Header = () => {
  
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledHeader>
      <HeaderWrapper theme={theme}>
        <HeaderTitle>
          <Link to="/">{site.siteMetadata.title}</Link>
        </HeaderTitle>

        <HeaderNavList>
          <HeaderNavListItem>
            <Link to="/blog">Blog</Link>
          </HeaderNavListItem>

          <HeaderNavListItem>
            <Link to="/about">About</Link>
          </HeaderNavListItem>

          <HeaderNavListItem>
            <Link to="/contact">Contact</Link>
          </HeaderNavListItem>

          <StyledButton type="button" onClick={toggleTheme}>
            <img src={theme === 'dark' ? day : night} alt={theme} />
          </StyledButton>
          
        </HeaderNavList>
      </HeaderWrapper>
    </StyledHeader>
  );
};

const HeaderNavList = ({ children }) => {
    return (
      <StyledNav>
        <StyledNavList>{children}</StyledNavList>
      </StyledNav>
    );
  };
  
const HeaderNavListItem = ({ children }) => {
    return <StyledNavListItem>{children}</StyledNavListItem>;
};