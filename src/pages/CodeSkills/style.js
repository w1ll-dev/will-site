import styled from "styled-components";
import { Container } from "../../components/commom/index";
import { device } from "../../styles/devices";

export const Wrapper = styled(Container)`
  padding: 2rem;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (${device.mobileL}) {
    padding: 1rem;
  }
`;

export const PageTitle = styled.h1``;
export const SkillsRow = styled(Container)`
  justify-content: space-around;
  flex: 1;
  padding: 2rem;
  @media (${device.mobileL}) {
    padding: 1rem;
    flex-direction: column;
  }
`;

export const SkillCard = styled(Container)`
  box-shadow: 0 0 3px ${({ theme }) => theme.backgroundSidebar};
  boder-radius: 0.3rem;
  width: 30%;
  height: 20rem;
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;
  transition: 500ms;
  &:hover {
    transform: scale(1.05);
    transition: 500ms;
  }
  @media (${device.mobileL}) {
    width: 100%;
    margin: 1.5rem 0;
  }
`;

export const SkillAvatar = styled(Container)`
  justify-content: center;
  width: 10rem;
  height: 10rem;
  background-image: url(${({ skillImage }) => skillImage});
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  @media (${device.mobileL}) {
    width: 5rem;
    height: 5rem;
  }
`;

export const SkillTitle = styled.h1`
  @media (${device.mobileL}) {
    margin-bottom: 1rem;
  }
  margin-bottom: 2rem;
`;

export const SkillSummary = styled.p`
  margin: 0.3rem;
`;
