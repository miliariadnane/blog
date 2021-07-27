import styled from 'styled-components';
import { Container } from '../../common/Container';

export const StyledFooter = styled.footer`
  padding-top: var(--size-300);
  padding-bottom: var(--size-300);
`;

export const FooterAttribution = styled.p`
  font-size: var(--size-300);
  with: 100%;
  & a {
    color: inherit;
  }
  @media (max-width: 960px) {
    flex: 0 0 100%;
    height: 100px;
    flex-direction: column;
    & a {
      color: #50a1fc;
      text-decoration: none;
    }
  }
`;

export const FooterWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 960px) {
    margin: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
`;

export const Item = styled.img`
  margin: 0 0.2rem;
  ${({ img }) =>
    img &&
    `
		position: relative;
		// top: .40rem;
    display: inline;
	`};
`

export const CopyrightsLinks = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`