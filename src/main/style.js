import styled from "styled-components";
import { Container } from "../components/commom";
import { device } from "../styles/devices";

export const Main = styled(Container)`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  @media(${device.mobileL}){
    flex-direction: column;
  }
`;

export const Content = styled(Container)`
  width: 100%;
  background: ${({theme}) => theme.backgroundContent};
  
`;