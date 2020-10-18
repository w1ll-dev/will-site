import styled from "styled-components";
import { Container } from "../../components/commom/index";
import Me from "../../assets/images/me.jpeg";
import { device } from "../../styles/devices";

export const Wrapper = styled(Container)`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (${device.mobileL}) {
    flex: 1;
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
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.backgroundSidebar};
`;

export const PageContent = styled(Container)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MyName = styled.h2`
  font-weight: bold;
`;

export const ShortSummary = styled.h3`
  text-align: center;
  margin-bottom: 3rem;
`;

export const AboutMeTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const CompleteSummary = styled.p`
  text-align: center;
  width: 80%;
  @media (${device.mobileL}) {
    width: 80%;
  }
`;
