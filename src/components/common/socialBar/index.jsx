import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Github, Twitter, Medium, LinkedIn } from '../icons';
import { SocialBarWrapper } from './styles';

function SocialBar() {
  return (
    <StaticQuery
    
      query={socialQuery}
      render={data => {
        const { twitter, github, medium, linkedIn } = data.site.siteMetadata.social;
        return (
          <SocialBarWrapper>
            {github && <Github username={github} />}
            {twitter && <Twitter username={twitter} />}
            {linkedIn && <LinkedIn username={linkedIn} />}
            {medium && <Medium username={medium} />}
          </SocialBarWrapper>
        );
      }}
    />
  );
}

const socialQuery = graphql`
  query SocialQuery {
    site {
      siteMetadata {
        social {
          twitter
          github
          medium
          linkedIn
        }
      }
    }
  }
`;
export default SocialBar;