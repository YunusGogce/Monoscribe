import { JSX } from "react";
import { BaseTypographyProps } from "../types";
import { TypographyBase } from "../TypographyBase";
import { StyledHeadingWrapper } from "./Heading.styles";

type HeadingProps = BaseTypographyProps & {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading = ({ level = 2, size, ...props }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <StyledHeadingWrapper level={level}>
      <TypographyBase as={Tag} size={size || "inherit"} {...props} />
    </StyledHeadingWrapper>
  );
};
