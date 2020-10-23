import styled from "styled-components";
import { Container } from "../../components/commom/index";

export const Wrapper = styled.div`
  display: block;
  position: absolute;
  background: ${({theme}) => theme.backgroundSidebar};
  opacity: 0.9;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PopUpContainer = styled(Container)`
  flex-direction: column;
  width: 50%;
  height: 60%;
`;


export const Title = styled.h1`
  color: ${({theme}) => theme.background};
`;

export const SettingTitle = styled.h3`
  color: ${({theme}) => theme.background};
`;

export const SettingContainer = styled(Container)`
  flex-direction: column;
  padding: 2rem;
`;
