import React from "react";
import Switch from "react-switch";
import {
  sunIcon,
  moonIcon
} from '../../assets'
import { FixIcons, ThemeIcon } from "./style";
import { useTheme } from "../../context/theme";
import theme from "../../styles/themes";

export const ToggleTheme = () => {
  const { changeTheme, activeTheme } = useTheme();
  const { colors } = theme

  const newTheme = activeTheme === "light" ? "dark" : "light"

  return (
    <Switch
      onChange={() => changeTheme(newTheme)}
      checked={activeTheme === "light"}
      onColor={`${colors.lightOrange}`}
      onHandleColor={`${colors.dark}`}
      uncheckedIcon={
        <FixIcons>
          <ThemeIcon src={moonIcon} />
        </FixIcons>
      }
      checkedIcon={
        <FixIcons>
          <ThemeIcon src={sunIcon} />
        </FixIcons>
      }
    />
  );
};
