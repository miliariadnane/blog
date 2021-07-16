import styled from 'styled-components';

export const LayoutWrapper = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;

& main {
  margin-top: auto;
  margin-bottom: auto;
}

& footer {
  margin-top: auto;
}
`;