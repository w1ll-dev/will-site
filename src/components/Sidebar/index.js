import React from "react";
import { Menu } from "../Menu";
import {
  Wrapper,
  MyAvatar,
  Profile,
  MyName,
  MyOccupation,
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
import { Link, useLocation } from "react-router-dom";
import { i18n } from '../../translate/i18n';
import { i18nKeys } from "../../constants";

const items = [
  {
    itemIcon: homeIcon,
    itemRoute: RoutesENUM.HOME,
    itemTitle: "home"
  },
  {
    itemIcon: experienceIcon,
    itemRoute: RoutesENUM.EXPERIENCE,
    itemTitle: "experiences"
  },
  {
    itemIcon: codeIcon,
    itemRoute: RoutesENUM.CODE_SKILLS,
    itemTitle: "skills"
  },
];

const {
  my_name,
  my_profession
} = i18nKeys;

const { GITHUB_URL, LINKEDIN_URL } = Contacts;

export const Sidebar = () => {
  const { pathname: currentRoute } = useLocation();
  const { enKey, ptKey, storageKey } = Idiom;
  const noMobile = window.innerWidth > 438;
  const { activeTheme } = useTheme();

  const changeIdiom = ({ newIdiomKey }) => {
    const currentIdiomKey = localStorage.getItem(`${storageKey}`)
    if (currentIdiomKey !== newIdiomKey) {
      localStorage.setItem(`${storageKey}`, newIdiomKey);
      window.location = window.location;
    }
  };

  return (
    <Wrapper>
      <Profile>
        <MyAvatar />
        <MyName children={i18n.t(my_name)} />
        <MyOccupation children={i18n.t(my_profession)} />
      </Profile>
      <Menu menuItemsList={items} />
      {noMobile ? (
        <BottomContainer>
          <ContactRow>
            <LinkContainer href={GITHUB_URL}>
              <ContactIcon
                src={activeTheme === "light" ? githubWhiteIcon : githubIcon}
                title={"github"}
              />
            </LinkContainer>
            <LinkContainer href={LINKEDIN_URL}>
              <ContactIcon
                src={linkedinIcon}
                title={"linkedIn"}
              />
            </LinkContainer>
          </ContactRow>
          <ToggleTheme />
          <TranslateRow>
            <CountryFlag
              src={brazilIcon}
              title={"portuguese"}
              onClick={() => changeIdiom({ newIdiomKey: ptKey })}
            />
            <CountryFlag
              src={usaIcon}
              title={"english"}
              onClick={() => changeIdiom({ newIdiomKey: enKey })}
            />
          </TranslateRow>
        </BottomContainer>
      ) : (
        <Link to={RoutesENUM.SETTINGS}>
          <SettingsIcon
            src={settingsIcon}
            active={currentRoute === RoutesENUM.SETTINGS}
          />
        </Link>
      )}
    </Wrapper>
  );
};
