import styled from 'styled-components';
import { Container } from '../../common/Container';

export const StyledFooter = styled.footer`
  padding-top: var(--size-300);
  padding-bottom: var(--size-300);
`;

export const FooterAttribution = styled.p`
  font-size: var(--size-300);

  & a {
    color: inherit;
  }
`;

export const FooterWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.img`
  margin: 0 0.2rem;
  ${({ img }) =>
    img &&
    `
		position: relative;
		top: .40rem;
    display: inline;
	`};
`
