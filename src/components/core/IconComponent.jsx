import React from "react";
import Icon from "@mui/material/Icon";

// Iconos de Material UI que pueden ser utilizados:
// https://mui.com/material-ui/material-icons/?query=eye&theme=Outlined



export const IconComponent = ({
  name,
  fontSize = "medium",
  iconStyle = "filled",
  color = "#062043",
  className,
  size = undefined,
  onClick
}) => {
  return (
    <Icon 
      fontSize={fontSize} 
      onClick={onClick} 
      className={`
        material-icons-${iconStyle}
        ${className}
      `} 
      sx={{ color, fontSize: size }}
    >
      {name}
    </Icon>
  );
};
