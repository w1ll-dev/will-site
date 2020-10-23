import styled from "styled-components";
import { Container } from "../../components/commom/index";
import { device } from "../../styles/devices";

export const Wrapper = styled(Container)`
  flex-direction: column;
  align-items: center;
  @media (${device.mobileL}) {
    padding: 1rem;
  }

  padding: 5rem 2rem;
`;

export const LastJobResume = styled(Container)`
  flex-direction: column;
  @media (${device.mobileL}) {
    box-shadow: 0 0 3px ${({ theme }) => theme.backgroundSidebar};
    flex-direction: column;
    padding: 2rem 0;
  }
`;

export const ResponsabilitiesContainer = styled(Container)`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (${device.mobileL}) {
    flex-direction: column;
  }
`;

export const ResumeLastJob = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 600px;

  @media (${device.mobileL}) {
    width: 100%;
  }
`;

export const JobResposabilityContainer = styled(Container)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  transform: translateY(0rem);
  transition: 500ms;
  &:hover {
    transform: scale(1.05);
    transform: translateY(-1rem);
  }
  @media (${device.mobileL}) {
    width: 90%;
    padding: 2rem 0;
    border-bottom: 2px solid ${({ theme }) => theme.backgroundSidebar};
    &:last-child {
      border: none;
    }
  }
`;

export const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.backgroundSidebar};
`;

export const LastJobTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

export const ResponsabilityIcon = styled.img`
  width: 10rem;
  height: 10rem;
`;

export const JobResposabilityTitle = styled.h3``;

export const Summary = styled.p`
  text-align: center;
  padding: 2rem;
`;
