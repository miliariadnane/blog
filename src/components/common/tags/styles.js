import styled from 'styled-components';

export const Tag = styled.span`
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  font-size: var(--size-300);

  & a {
    position: relative;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    color: inherit;
    padding: 0.2rem 0.6rem;
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 4px;
  }

  & a:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;