import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuList, MenuItem, ItemIcon } from "./style";

export const Menu = ({ menuItemsList }) => {
  const { pathname: currentRoute } = useLocation();

  return (
    <MenuList>
      {menuItemsList.map(({ itemIcon, itemRoute }, index) => (
        <MenuItem key={Math.random()}>
          <Link to={itemRoute}>
            <ItemIcon src={itemIcon} active={itemRoute === currentRoute} />
          </Link>
        </MenuItem>
      ))}
    </MenuList>
  );
};
