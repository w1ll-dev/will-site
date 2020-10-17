import React from "react";
import { MenuList, MenuItem, ItemIcon } from "./style";

export const Menu = ({ menuItemsList }) => {
  return (
    <MenuList>
      {menuItemsList.map(({ itemIcon, itemRoute }, index) => (
        <MenuItem key={Math.random()}>
          <ItemIcon src={itemIcon} />
        </MenuItem>
      ))}
    </MenuList>
  );
};
