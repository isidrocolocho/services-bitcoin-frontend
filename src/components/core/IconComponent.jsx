import React from "react";
import { SvgIcon } from "@mui/material";
import * as Icons from "@mui/icons-material";

export const IconComponent = ({
  name,
  fontSize = "medium",
  iconStyle = "filled",
  color = "#062043",
  className,
  size = undefined,
  onClick
}) => {
  const Icon = Icons[name];

  if (!Icon) {
    console.error(`Icon with name "${name}" does not exist in @mui/icons-material`);
    return null;
  }

  return (
    <SvgIcon 
      component={Icon} 
      fontSize={fontSize} 
      onClick={onClick} 
      className={className} 
      sx={{ color, fontSize: size }} 
    />
  );
};
