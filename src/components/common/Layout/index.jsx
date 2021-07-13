import React, { Fragment } from 'react';
import SEO from '../SEO';
import { Header, Footer } from '../../theme';
import Container from '../Container';
import GlobalStyle from './global-styles';
import { LayoutWrapper } from './styles';

const Layout = ({ children, title, description, socialImage = '' }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <SEO title={title} description={description} socialImage={socialImage} />
      <LayoutWrapper>
        <Header />
        <main>
          <Container>{children}</Container>
        </main>
        <Footer />
      </LayoutWrapper>
    </Fragment>
  );
};

export default Layout;