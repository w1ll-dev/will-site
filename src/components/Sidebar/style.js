import styled from "styled-components";
import { device } from "../../styles/devices";
import Me from "../../assets/images/me.jpeg";
import { Container } from "../commom";

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 8rem;
  background: ${({ theme }) => theme.backgroundSidebar};
  padding: 2rem 0;

  @media (${device.mobileL}) {
    flex-direction: row;

    height: 2.5rem;
    width: 100%;
    padding: 2rem;
  }
`;

export const BottomContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  @media (${device.mobileL}) {
    height: 0;
    width: 0;
    justify-content: center;
  }
`;

export const ContactRow = styled(Container)`
  justify-content: space-evenly;
  width: 100%;
`;

export const ContactIcon = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  @media (${device.mobileL}) {
    display: none;
  }
`;

export const MyAvatar = styled(Container)`
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  background-image: url(${Me});
  background-size: contain;
  @media (${device.mobileL}) {
    display: none;
  }
`;
