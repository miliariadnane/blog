import styled from 'styled-components';

export const LinkImg = styled.a`
  position: relative;
  border-radius: 50%;
  transition: transform 0.4s ease;
  &:hover {
    background-color: transparent;
    transform: rotate(360deg) scale(1.5);
    top: 5px;
    cursor: pointer;
    box-shadow: none;
  }
`
