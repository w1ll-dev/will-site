import React from "react";
import { Menu } from "../Menu";
import { UserAvatar, Wrapper } from "./style";
import homeIcon from "../../assets/icons/home.svg";
import aboutIcon from "../../assets/icons/about.svg";
import contactIcon from "../../assets/icons/contact.svg";
import { ToggleTheme } from "../ToggleTheme";
import { RoutesENUM } from "../../contants";

const items = [
  { itemIcon: homeIcon, itemRoute: RoutesENUM.HOME },
  { itemIcon: aboutIcon, itemRoute: RoutesENUM.ABOUT_ME },
  { itemIcon: contactIcon, itemRoute: RoutesENUM.CONTACT },
];

export const Sidebar = () => {
  return (
    <Wrapper>
      <UserAvatar />
      <Menu menuItemsList={items} />
      <ToggleTheme />
    </Wrapper>
  );
};
