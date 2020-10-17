import React from "react";
import { Menu } from "../Menu";
import { UserAvatar, Wrapper } from "./style";
import homeIcon from '../../assets/icons/home.svg';
import aboutIcon from '../../assets/icons/about.svg';
import contactIcon from '../../assets/icons/contact.svg';
import { ToggleTheme } from "../ToggleTheme";

const items = [
  { itemIcon: homeIcon, itemRoute: '/' },
  { itemIcon: aboutIcon, itemRoute: '/' },
  { itemIcon: contactIcon, itemRoute: '/' }
]

export const Sidebar = () => {
  return (
    <Wrapper>
      <UserAvatar />
      <Menu menuItemsList={items}/>
      <ToggleTheme/>
    </Wrapper>
  );
};
