import { createContext, useContext } from "react";
import { TypographyBaseProps } from "../types";

export type TypographySettings = TypographyBaseProps;

export const TypographyContext = createContext<TypographySettings | undefined>(
  undefined,
);

export const useTypography = (): TypographySettings => {
  return useContext(TypographyContext) || {};
};
