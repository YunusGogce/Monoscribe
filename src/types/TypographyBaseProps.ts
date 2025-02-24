import { HTMLAttributes } from "react";

export type TypographyBaseProps = {
  color?: string;
  font?: string;
  size?: `${number}px` | `${number}rem` | `${number}em` | "inherit";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  uppercase?: boolean | string;
  italic?: boolean | string;
  underline?: boolean | string;
  strikethrough?: boolean | string;
  align?: "left" | "center" | "right" | "justify";
  lineHeight?: `${number}` | `${number}px` | "inherit";
  letterSpacing?: `${number}px` | `${number}em` | "inherit";
} & HTMLAttributes<HTMLElement>;
