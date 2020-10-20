import styled from "styled-components";
import { device } from "../../styles/devices";

export const Container = styled.div`
  display: flex;
  color: ${({ theme }) => theme.textColor};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkContainer = styled.a.attrs(() => ({
  target: "_blank",
}))`
  @media (${device.mobileL}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme}) => theme.backgroundSidebar};
    text-decoration: none;
  }
`;
