import styled from 'styled-components';

export const SocialLinkList = styled.ul`
padding: 0;
list-style: none;
display: flex;
`;

export const SocialLinkItem = styled.li`
margin-right: var(--size-400);
text-transform: uppercase;

& a {
  color: inherit;
  font-size: var(--size-300);
}
`;