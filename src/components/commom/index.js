import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: ${({theme}) => theme.textColor}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;