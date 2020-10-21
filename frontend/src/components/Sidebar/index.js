import React from "react";
import { Menu } from "../Menu";
import {
  Wrapper,
  MyAvatar,
  BottomContainer,
  ContactRow,
  ContactIcon,
} from "./style";
import homeIcon from "../../assets/icons/home.svg";
import experienceIcon from "../../assets/icons/experience.svg";
// import contactIcon from "../../assets/icons/contact.svg";
import codeIcon from "../../assets/icons/code.svg";
import githubIcon from "../../assets/icons/github.svg";
import githubWhiteIcon from "../../assets/images/github-white.png";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import { ToggleTheme } from "../ToggleTheme";
import { RoutesENUM } from "../../contants";
import { Contacts } from "../../contants";
import { LinkContainer } from "../commom";
import { useTheme } from "../../context/theme";

const items = [
  { itemIcon: homeIcon, itemRoute: RoutesENUM.HOME },
  { itemIcon: experienceIcon, itemRoute: RoutesENUM.EXPERIENCE },
  // { itemIcon: contactIcon, itemRoute: RoutesENUM.CONTACT },
  { itemIcon: codeIcon, itemRoute: RoutesENUM.CODE_SKILLS },
];

const { GITHUB_URL, LINKEDIN_URL } = Contacts;

export const Sidebar = () => {
  const noMobile = window.innerWidth > 1300;
  const { activeTheme } = useTheme();
  return (
    <Wrapper>
      <MyAvatar />
      <Menu menuItemsList={items} />
      <BottomContainer>
        {noMobile && (
          <ContactRow>
            <LinkContainer href={GITHUB_URL}>
              <ContactIcon
                src={activeTheme === "light" ? githubWhiteIcon : githubIcon}
              />
            </LinkContainer>
            <LinkContainer href={LINKEDIN_URL}>
              <ContactIcon src={linkedinIcon} />
            </LinkContainer>
          </ContactRow>
        )}
        <ToggleTheme />
      </BottomContainer>
    </Wrapper>
  );
};
