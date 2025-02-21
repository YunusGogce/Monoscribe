import { HTMLAttributes } from "react";

export type BaseTypographyProps = {
  color?: string;
  font?: string;
  size?: string | number;
} & HTMLAttributes<HTMLSpanElement>;
