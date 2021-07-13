import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import {
    StyledHeader,
    HeaderWrapper,
    HeaderTitle,
    StyledNav,
    StyledNavList,
    StyledNavListItem
} from './styles';

const Header = () => {
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

  return (
    <StyledHeader>
      <HeaderWrapper>
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
        </HeaderNavList>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;

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