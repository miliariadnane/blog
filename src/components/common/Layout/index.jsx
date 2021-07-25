import React, { Fragment, useContext } from 'react';
import SEO from '../SEO';
import { Header, Footer } from '../../theme';
import { Container } from '../Container';
import GlobalStyle from './global-styles';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { LayoutWrapper } from './styles';

const Layout = ({ children, title, description, socialImage = '' }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <Fragment>
      <GlobalStyle theme={theme} />
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