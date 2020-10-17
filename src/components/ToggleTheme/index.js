import React from "react";
import Switch from "react-switch";
import sunIcon from "../../assets/icons/sun.svg";
import moonIcon from "../../assets/icons/moon.svg";
import { FixIcons, ThemeIcon } from "./style";

export const ToggleTheme = () => {
  return (
    <Switch
      onChange={() => console.log("toggle")}
      checked={1}
      onColor="#fff"
      onHandleColor="#333333"
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
