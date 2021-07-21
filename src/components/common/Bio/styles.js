import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Wrapper = styled.div`
margin-top: 10px;
margin-bottom: rhythm(2.5);
`;

export const WrapperBio = styled.div`
display: flex;
align-items: center;
`;

export const BioImg = styled(GatsbyImage)`
    margin-right: rhythm(1 / 2);
    border-radius: '50%';
    margin-bottom: 0;
    min-width: 70px;
    border-radius: 100%;
`;

export const BioDescription = styled.div`
width: 100%;
padding: 12px;
& p {
    margin-bottom: 1rem;
}
`;