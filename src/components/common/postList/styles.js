import styled from 'styled-components';

export const StyledPostList = styled.ul`
padding: 0;
list-style: none;
display: grid;
justify-items: center;
grid-gap: var(--size-600);
grid-template-columns: repeat(auto-fit, minmax(35ch, 1fr));

@media screen and (max-width: 500px) {
  & {
    display: block;
  }
}
`;

export const StyledPostListItem = styled.li`
position: relative;
display: flex;
flex-direction: column;
padding: 1.5rem;
border: 1px solid rgba(255, 255, 255, 0.5);
background-color: rgba(255, 255, 255, 0.3);
backdrop-filter: blur(10px);
border-radius: 8px;

&:hover {
  background-color: rgba(255, 255, 255, 0.5);
  ${({ theme }) =>
    theme === 'dark' &&
    `
    background-color: #2e2c2c80;
  `};
}

${({ theme }) =>
  theme === 'dark' &&
  `
  background-color: #5a58584d;
`};

@media screen and (max-width: 500px) {
  & {
    margin-top: var(--size-600);
  }
}
`;

export const PostListTitle = styled.h2`
line-height: 1.2;
margin-top: 1rem;
margin-bottom: 1rem;
text-transform: capitalize;
font-size: var(--size-600);
font-weight: 700;

& a {
  text-decoration: none;
  color: inherit;
}

& a::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
`;

export const PostListExcerpt = styled.p`
margin-top: auto;
font-size: var(--size-400);
`;

export const PostListMeta = styled.div`
  margin-top: 2rem;

  font-size: var(--size-300);
  display: flex;
  justify-content: space-between;
  
  ${({ theme }) =>
    theme === 'dark' &&
    `
		background-color: #2b2a2a;
	`};
`;