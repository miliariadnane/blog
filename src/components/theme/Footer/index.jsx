import React, { useContext } from 'react';
import { Link } from 'gatsby';
import SocialLinks from '../../common/socialLinks';
import { ThemeContext } from '../../../providers/ThemeProvider';
import gatsbyIcon from '../../../assets/footer/gatsby.svg';
import githubLightIcon from '../../../assets/footer/github/light.svg';
import githubDarkIcon from '../../../assets/footer/github/dark.svg';
import {
    StyledFooter,
    FooterWrapper,
    FooterAttribution,
    Item,
    CopyrightsLinks
} from './styles';

export const Footer = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <StyledFooter>
      <FooterWrapper>
        <SocialLinks />
        <FooterAttribution>
          <CopyrightsLinks>
            ©{' '}
            <Item as={Link} to="/">
              MILIARI ADNANE
            </Item>{' '}
            {`${new Date().getFullYear()} `}
              Built with
              <a 
                  href="https://www.gatsbyjs.org" 
                  rel="noopener noreferrer" 
                  target="_blank"
              >
                <Item src={gatsbyIcon} img alt="Gatsby icon" />
              </a>
              Open sourced on {' '}
              <a 
                  href="https://github.com/miliariadnane/miliari.me" 
                  rel="noopener noreferrer" 
                  target="_blank"
              > 
                <Item 
                  src={theme === 'light' ? githubLightIcon : githubDarkIcon}
                  img 
                  alt="Github icon" />
              </a>
          </CopyrightsLinks>
        </FooterAttribution>
      </FooterWrapper>
    </StyledFooter>
  );
};