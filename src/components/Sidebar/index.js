import React from "react";
import { Menu } from "../Menu";
import { Wrapper, MyAvatar } from "./style";
import homeIcon from "../../assets/icons/home.svg";
import experienceIcon from "../../assets/icons/experience.svg";
import contactIcon from "../../assets/icons/contact.svg";
import codeIcon from "../../assets/icons/code.svg";
import { ToggleTheme } from "../ToggleTheme";
import { RoutesENUM } from "../../contants";

const items = [
  { itemIcon: homeIcon, itemRoute: RoutesENUM.HOME },
  { itemIcon: experienceIcon, itemRoute: RoutesENUM.EXPERIENCE },
  { itemIcon: contactIcon, itemRoute: RoutesENUM.CONTACT },
  { itemIcon: codeIcon, itemRoute: RoutesENUM.CODE_SKILLS },
];

export const Sidebar = () => {
  return (
    <Wrapper>
      <MyAvatar />
      <Menu menuItemsList={items} />
      <ToggleTheme />
    </Wrapper>
  );
};
