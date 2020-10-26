import React from "react";
import { Menu } from "../Menu";
import {
  Wrapper,
  MyAvatar,
  BottomContainer,
  ContactRow,
  ContactIcon,
  TranslateRow,
  CountryFlag,
  SettingsIcon,
  SettingsLinkContainer
} from "./style";
import homeIcon from "../../assets/icons/home.svg";
import experienceIcon from "../../assets/icons/experience.svg";
import codeIcon from "../../assets/icons/code.svg";
import githubIcon from "../../assets/icons/github.svg";
import githubWhiteIcon from "../../assets/images/github-white.png";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import brazilIcon from "../../assets/icons/brazil.svg";
import usaIcon from "../../assets/icons/united-states.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import { ToggleTheme } from "../ToggleTheme";
import { RoutesENUM, Idiom } from "../../contants";
import { Contacts } from "../../contants";
import { LinkContainer } from "../commom";
import { useTheme } from "../../context/theme";
import { PopUp } from "../../pages/Settings";
import { Link } from "react-router-dom";

const items = [
  { itemIcon: homeIcon, itemRoute: RoutesENUM.HOME },
  { itemIcon: experienceIcon, itemRoute: RoutesENUM.EXPERIENCE },
  { itemIcon: codeIcon, itemRoute: RoutesENUM.CODE_SKILLS },
];

const { GITHUB_URL, LINKEDIN_URL } = Contacts;

export const Sidebar = () => {
  const { enKey, ptKey, storageKey } = Idiom;
  const noMobile = window.innerWidth > 438;
  const { activeTheme } = useTheme();

  const changeIdiom = ({ newIdiomKey }) => {
    localStorage.setItem(`${storageKey}`, newIdiomKey);
    window.location = window.location;
  };

  return (
    <Wrapper>
      <MyAvatar />
      <Menu menuItemsList={items} />
      {noMobile ? (
        <BottomContainer>
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
          <ToggleTheme />
          <TranslateRow>
            <CountryFlag
              src={brazilIcon}
              onClick={() => changeIdiom({ newIdiomKey: ptKey })}
            />
            <CountryFlag
              src={usaIcon}
              onClick={() => changeIdiom({ newIdiomKey: enKey })}
            />
          </TranslateRow>
        </BottomContainer>
      ) : (
        <Link to={RoutesENUM.SETTINGS}>
          <SettingsIcon src={settingsIcon} />
        </Link>
      )}
    </Wrapper>
  );
};
