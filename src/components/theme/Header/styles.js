import styled from 'styled-components';
import { Container } from '../../common/Container';

export const StyledHeader = styled.header`
  padding-top: var(--size-300);
  background: rgb(255 255 255 / 30%);
  padding: 4px;
`;

export const HeaderWrapper = styled(Container)`
  display: flex;
  align-items: center;
  -webkit-box-align: center;
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

export const StyledButton = styled.button`
  margin-left: 20px;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  transition: all 150ms ease 0s;
  border-radius: 50%;
  top: 0.3rem;
  width: 2rem;
  height: 2rem;
  padding: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-align: left;
  -webkit-box-pack: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  background: #f2f3f5;
  ${({ theme }) =>
    theme === 'dark' &&
    `
    color: rgb(255, 255, 255);
    background: rgb(19, 20, 21);
	`};
  img {
    margin: 0;
  }
`