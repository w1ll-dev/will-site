import styled from "styled-components";
import { Container } from "../components/commom";

export const Main = styled(Container)`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export const Content = styled(Container)`
  width: 100%;
  background: ${({theme}) => theme.backgroundContent}
`;