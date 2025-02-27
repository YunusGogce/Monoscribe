import * as React from "react";
import { TypographyBaseProps } from "../../types";
import { TypographyBase } from "../TypographyBase";

export const Paragraph = (props: TypographyBaseProps) => {
  return <TypographyBase as="p" {...props} />;
};
