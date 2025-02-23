import { HTMLAttributes } from "react";

export type TypographyBaseProps = {
  color?: string;
  font?: string;
  size?: string | number;
} & HTMLAttributes<HTMLSpanElement>;
