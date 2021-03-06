import styled from "styled-components";
import { Container } from "../../components/commom/index";
import Me from "../../assets/images/me.jpeg";
import { device } from "../../styles/devices";
import { pageTransitions } from "../../styles/animations";

export const Wrapper = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  animation: ${pageTransitions} 500ms linear;
  @media (${device.mobileL}) {
    height: 1fr;
  }
`;

export const HomeAvatar = styled(Container)`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;

  margin: 1rem 0;
  background-image: url(${Me});
  background-size: contain;
`;

export const Welcome = styled.h1`
  margin: 3rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.backgroundSidebar};
`;

export const PageContent = styled(Container)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const MyName = styled.h2`
  font-weight: bold;
`;

export const ShortSummary = styled.h3`
  text-align: center;
  margin-bottom: 3rem;
  @media (${device.mobileL}) {
    width: 70%;
  }
`;

export const AboutMeTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const CompleteSummary = styled.p`
  text-align: center;
  width: 50rem;
  @media (${device.tablet}) {
    width: 70%;
  }

  @media (${device.mobileL}) {
    width: 100%;
  }
`;
export const ContactContainer = styled(Container)`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0;
  height: 10rem;
  width: 100%;
`;

export const ContactTitle = styled.h1``;

export const ContactRow = styled(Container)`
  justify-content: space-around;
  width: 100%;
`;

export const ContactLabel = styled.h4``;

export const ContactIcon = styled.img`
  width: 5rem;
  height: 5rem;
  @media (${device.mobileL}) {
    margin: 1rem 0;
  }
`;
