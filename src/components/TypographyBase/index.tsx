import { JSX } from "react";
import { StyledTypographyBase } from "./TypographyBase.styles";
import { TypographyBaseProps } from "../../types";
import { useTypography } from "../../context/TypographyContext";

export const TypographyBase = ({
  as: Tag = "span",
  color,
  font,
  size,
  children,
  ...props
}: TypographyBaseProps & { as?: keyof JSX.IntrinsicElements }) => {
  const groupStyles = useTypography();

  // Merges styles, where props set in the typography components (e.g., Heading, Paragraph)
  // override those set in the Group.
  const mergedProps = {
    ...groupStyles,
    ...(color && { color }),
    ...(font && { font }),
    ...(size && { size }),
    ...props,
  };

  return (
    <StyledTypographyBase as={Tag} {...mergedProps}>
      {children}
    </StyledTypographyBase>
  );
};
