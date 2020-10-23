import React from 'react';
import { i18n } from '../../translate/i18n';
import { i18nKeys } from "../../contants";
import { 
  Wrapper,
  Title,
  PopUpContainer,
  SettingContainer,
  SettingTitle,
} from './style';

const { settings_title } = i18nKeys;

export const PopUp = () => {
  return (
    <Wrapper>
      <PopUpContainer>
        <Title>{i18n.t(settings_title)}</Title>
        <SettingContainer>
          <SettingTitle></SettingTitle>
        </SettingContainer>
        <SettingContainer>

        </SettingContainer>
      </PopUpContainer>
    </Wrapper>
  );
}
