import React from "react";

import { i18n } from "../../translate/i18n";
import { i18nKeys, Idiom } from "../../contants";
import brazilIcon from "../../assets/icons/brazil.svg";
import moonIcon from "../../assets/icons/moon.svg";
import sunIcon from "../../assets/icons/sun.svg";
import usaIcon from "../../assets/icons/united-states.svg";
import {
  Wrapper,
  Title,
  PopUpContainer,
  SettingContainer,
  SettingTitle,
  IconRow,
  Icon,
} from "./style";
import { useTheme } from "../../context/theme";

const { settings_title, theme_title, language } = i18nKeys;

export const Settigs = () => {
  const { enKey, ptKey, storageKey } = Idiom;
  const noMobile = window.innerWidth > 1300;
  const { changeTheme, activeTheme } = useTheme();

  const changeIdiom = ({ newIdiomKey }) => {
    localStorage.setItem(`${storageKey}`, newIdiomKey);
    window.location = window.location;
  };

  return (
    <Wrapper>
      <Title>{i18n.t(settings_title)}</Title>
      <SettingContainer>
        <SettingTitle>{i18n.t(theme_title)}</SettingTitle>
        <IconRow>
          <Icon
            onClick={activeTheme !== "light" && changeTheme} 
            src={sunIcon} />
          <Icon
            onClick={activeTheme !== "dark" && changeTheme} 
            src={moonIcon} />
        </IconRow>
      </SettingContainer>
      <SettingContainer>
        <SettingTitle>{i18n.t(language)}</SettingTitle>
        <IconRow>
          <Icon 
            onClick={() => changeIdiom({ newIdiomKey: ptKey })}
            src={brazilIcon} />
          <Icon 
            onClick={() => changeIdiom({ newIdiomKey: enKey })}
            src={usaIcon} />
        </IconRow>
      </SettingContainer>
    </Wrapper>
  );
};
