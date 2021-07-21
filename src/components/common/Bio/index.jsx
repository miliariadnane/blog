import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SocialBar from '../../common/socialBar';
import { getImage } from 'gatsby-plugin-image';
import { 
    Wrapper,
    WrapperBio,
    BioImg,
    BioDescription,
} 
from './styles';

function Bio() {
  return (
    <StaticQuery

      query={bioQuery}
      render={(data) => {
        const { description } = data.site.siteMetadata;
        const profileImage = getImage(data.avatar.childImageSharp.gatsbyImageData);
        return (
            <Wrapper>
                <WrapperBio>
                    <BioImg image={profileImage} alt="" />
                    <BioDescription>
                        <p>{description}</p>
                        <SocialBar />
                    </BioDescription>
                </WrapperBio>
            </Wrapper>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-image.JPG/" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 70, height: 70)
        }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default Bio;