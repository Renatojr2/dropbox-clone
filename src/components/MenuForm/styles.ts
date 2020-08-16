import styled from 'styled-components';
import { FaDropbox } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 480px;
  }
  
`;

export const NavigationForm = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 32px;
  min-height: 61px;

  h1 {
    display: flex;
    align-items: center;

    span {
      font-size: 26px;
      margin-left: 8px;
    }
  }

  button {
    border: none;
    background: none;
    outline: none;
    font-size: 24px;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    h1 {
      display: none;
    }
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;
  max-width: 480px;
  margin: 0 auto;

  width: 100%;

  > .title {
    font-size: 25px;
    font-weight: bold;
  }

  > .subTitle {
    font-size: 12;
    margin-top: 3px;
  }
`
export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  fill: var(--color-blue);
`;
