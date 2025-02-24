import { JSX } from "react";
import { StyledTypographyBase } from "./TypographyBase.styles";
import { TypographyBaseProps } from "../../types";
import { useTypography } from "../../context/TypographyContext";

export const TypographyBase = ({
  as: Tag = "span",
  children,
  uppercase,
  italic,
  underline,
  strikethrough,
  ...props
}: TypographyBaseProps & { as?: keyof JSX.IntrinsicElements }) => {
  const groupStyles = useTypography();

  // Merges styles, where component-level props (e.g., Heading, Paragraph) override those set in the Group.
  const mergedProps = {
    ...groupStyles,
    ...props,
    ...(uppercase && { uppercase: "true" }),
    ...(italic && { italic: "true" }),
    ...(underline && { underline: "true" }),
    ...(strikethrough && { strikethrough: "true" }),
  };

  return (
    <StyledTypographyBase as={Tag} {...mergedProps}>
      {children}
    </StyledTypographyBase>
  );
};
