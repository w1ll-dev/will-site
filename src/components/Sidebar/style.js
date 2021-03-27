import styled from "styled-components";
import { device } from "../../styles/devices";
import Me from "../../assets/images/me.jpeg";
import { Container } from "../commom";

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 9rem;
  background: ${({ theme }) => theme.backgroundSidebar};
  padding: 2rem 0;

  @media (${device.mobileL}) {
    flex-direction: row;
    position: sticky;
    top: 0;
    height: 2.5rem;
    width: 100%;
    padding: 2rem;
  }
`;

export const BottomContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  width: 100%;
  @media (${device.mobileL}) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
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

export const Profile = styled(Container)`
  display: flex;
  height: 10rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (${device.mobileL}) {
    display: none;
  }
`;

export const MyAvatar = styled(Container)`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  background-image: url(${Me});
  background-size: contain;
  @media (${device.mobileL}) {
    display: none;
  }
`;

export const MyName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${({theme}) => theme.backgroundContent};
  @media (${device.mobileL}) {
    display: none;
  }
`;

export const MyOccupation = styled(MyName)`
  font-size: 0.9rem;
  width: 7rem;
  text-align: center;
  font-weight: normal;
`;

export const TranslateRow = styled(ContactRow)``;

export const CountryFlag = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const SettingsIcon = styled.img`
  width: 2rem;
  height: 2rem;
  opacity: ${({ active }) => !active && 0.4};
`;
