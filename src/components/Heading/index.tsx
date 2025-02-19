import { JSX } from "react";
import { StyledHeading } from "./Heading.styles";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: string;
};

export const Heading = ({ level, children }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <StyledHeading as={Tag} level={level}>
      {children}
    </StyledHeading>
  );
};
