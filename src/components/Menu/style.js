import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 12rem;
  justify-content: space-around;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  display: flex;
`;

export const ItemIcon = styled.img`
  width: 2rem;
  height: 2rem;
  opacity: ${({active}) => !active && 0.4};
`;
