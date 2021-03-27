import React from "react";

import { i18n } from "../../translate/i18n";
import { i18nKeys, Idiom } from "../../constants";
import {
  brazilIcon,
  moonIcon,
  sunIcon,
  usaIcon,
} from '../../assets'
import {
  Wrapper,
  Title,
  SettingContainer,
  SettingTitle,
  IconRow,
  Icon,
} from "./style";
import { useTheme } from "../../context/theme";

const { settings_title, theme_title, language } = i18nKeys;

export const Settigs = () => {
  const { enKey, ptKey, storageKey } = Idiom;
  const { changeTheme } = useTheme();

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
            onClick={() => changeTheme("light")}
            src={sunIcon}
          />
          <Icon
            onClick={() => changeTheme("dark")}
            src={moonIcon}
          />
        </IconRow>
      </SettingContainer>
      <SettingContainer>
        <SettingTitle>{i18n.t(language)}</SettingTitle>
        <IconRow>
          <Icon
            onClick={() => changeIdiom({ newIdiomKey: ptKey })}
            src={brazilIcon}
          />
          <Icon
            onClick={() => changeIdiom({ newIdiomKey: enKey })}
            src={usaIcon}
          />
        </IconRow>
      </SettingContainer>
    </Wrapper>
  );
};
