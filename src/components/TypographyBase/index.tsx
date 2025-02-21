import { JSX } from "react";
import { StyledTypographyBase } from "./TypographyBase.styles";
import { BaseTypographyProps } from "../types";

export const TypographyBase = ({
  as: Tag = "span",
  color,
  font,
  size,
  children,
  ...props
}: BaseTypographyProps & { as?: keyof JSX.IntrinsicElements }) => {
  return (
    <StyledTypographyBase
      as={Tag}
      color={color}
      font={font}
      size={size}
      {...props}
    >
      {children}
    </StyledTypographyBase>
  );
};
