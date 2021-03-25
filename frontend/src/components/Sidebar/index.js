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
} from "./style";
import {
  homeIcon,
  experienceIcon,
  codeIcon,
  githubIcon,
  githubWhiteIcon,
  linkedinIcon,
  brazilIcon,
  usaIcon,
  settingsIcon
} from '../../assets'
import { ToggleTheme } from "../ToggleTheme";
import { RoutesENUM, Idiom } from "../../constants";
import { Contacts } from "../../constants";
import { LinkContainer } from "../commom";
import { useTheme } from "../../context/theme";
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
