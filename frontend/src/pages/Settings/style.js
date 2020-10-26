import styled from "styled-components";
import { Container } from "../../components/commom/index";

export const Wrapper = styled(Container)`
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  background: ${({theme}) => theme.background};
  width: 100%;
  height: 85vh;
`;

export const PopUpContainer = styled(Container)`
  flex-direction: column;
  margin: 3rem 0;
  align-items: center;
  width: 100%;
  height: 60%;
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.background};
  text-align: center;
  margin: 1rem 0;
`;

export const SettingTitle = styled.h3`
  color: ${({theme}) => theme.background};
  margin: 1rem 0;
`;

export const SettingContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
`;

export const IconRow = styled(Container)`
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Icon = styled.img`
  width: 8rem;
  height: 8rem;
  cursor: pointer;
`;

