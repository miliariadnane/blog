import React from 'react';
import { Link } from 'gatsby';
import SocialLinks from '../../common/socialShare';
import gatsbyIcon from '../../../assets/footer/gatsby.svg'
import githubIcon from '../../../assets/github/github.svg'
import {
    StyledFooter,
    FooterWrapper,
    FooterAttribution,
    Item
} from './styles';

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <SocialLinks />
        <FooterAttribution>
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
            <Item src={githubIcon} img alt="Github icon" />
          </a>
        </FooterAttribution>
      </FooterWrapper>
    </StyledFooter>
  );
};