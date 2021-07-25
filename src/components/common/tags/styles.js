import styled from 'styled-components';

export const Tag = styled.span`
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  font-size: var(--size-300);

  & a {
    position: relative;
    z-index: 2;
    background-color: #353535;
    text-decoration: none;
    color: #fff;
    padding: 0.2rem 0.6rem;
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 4px;
    ${({ theme }) =>
      theme === 'dark' &&
      `
      background-color: #50a1fc;
    `};
  }

  & a:hover {
    background-color: #7d7d7d;
    ${({ theme }) =>
      theme === 'dark' &&
      `
      background-color: #88b0df;
    `};
  }
`;