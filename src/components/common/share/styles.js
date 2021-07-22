import styled from 'styled-components';

export const ShareWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0 2rem 0;
  margin-top: 20px;
  .react-share__ShareButton {
    margin-right: 1rem;
    cursor: pointer;
  }

  .react-share__ShareButton:last-child {
    margin-right: unset;
  }
`;

export const ShareSpan = styled.span`
  font-size: 30px !important;
  margin-right: 15px;
  margin-left: 5px;
`;