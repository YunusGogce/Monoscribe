import * as React from "react";
import { ReactNode, useContext } from "react";
import {
  TypographyContext,
  TypographySettings,
} from "../../context/TypographyContext";

export type GroupProps = TypographySettings & {
  children: ReactNode;
};

export const Group = ({ children, ...styles }: GroupProps) => {
  const parentStyles = useContext(TypographyContext) || {};

  return (
    <TypographyContext.Provider value={{ ...parentStyles, ...styles }}>
      {children}
    </TypographyContext.Provider>
  );
};
