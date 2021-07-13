import styled from 'styled-components';
import Container from '../../common/Container';

export const StyledHeader = styled.header`
padding-top: var(--size-300);
`;

export const HeaderWrapper = styled(Container)`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const HeaderTitle = styled.div`
& a {
  text-transform: uppercase;
  text-decoration: none;
  font-size: var(--size-400);
  color: inherit;
}
`;

export const StyledNav = styled.nav`
position: static;
padding: 0;
background: transparent;
backdrop-filter: unset;
`;

export const StyledNavList = styled.ul`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;
padding: 0;
list-style-type: none;
`;

export const StyledNavListItem = styled.li`
&:not(:last-of-type) {
  margin-right: 2rem;
}
@media screen and (max-width: 700px) {
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
}
& a {
  color: inherit;
  text-transform: uppercase;
  font-size: var(--size-300);
  text-decoration: none;
  letter-spacing: 0.1rem;
}
@media screen and (max-width: 700px) {
  & a {
    font-size: 0.7rem;
  }
}
`;