import styled from "styled-components";
import { device } from "../../styles/devices";

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 12rem;
  justify-content: space-between;
  @media(${device.mobileL}){
    flex-direction: row;
    width: 50%;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  display: flex;
  padding: 0.5rem;
`;

export const ItemIcon = styled.img`
  width: 2rem;
  height: 2rem;
  opacity: ${({ active }) => !active && 0.4};
  transition: 500ms;
  transform: ${({ active }) => active && "scale(1.4)"};

  @media(${device.mobileL}){
    width: 1.5rem;
    height: 1.5rem;
  }
  &:hover {
    transform: scale(1.4);
  }
`;
