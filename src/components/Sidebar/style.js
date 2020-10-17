import styled from "styled-components";
import { Container } from "../commom/index";
import Me from "../../assets/images/me.jpeg";

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 8rem;
  background: ${({ theme }) => theme.backgroundSidebar};
  padding: 2rem 0; 
`;

export const UserAvatar = styled(Container)`
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  background-image: url(${Me});
  background-size: contain;
`;
