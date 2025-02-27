import { JSX } from "react";
import { TypographyBaseProps } from "../../types";
import { TypographyBase } from "../TypographyBase";
import { StyledHeadingWrapper } from "./Heading.styles";
import * as React from "react";

export type HeadingProps = TypographyBaseProps & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading = ({ level, size, ...props }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <StyledHeadingWrapper level={level}>
      <TypographyBase as={Tag} size={size || "inherit"} {...props} />
    </StyledHeadingWrapper>
  );
};
