import styled from "styled-components";
import { TypographyBaseProps } from "../../types";

export const StyledTypographyBase = styled.span<TypographyBaseProps>`
  color: ${({ color }) => color || "inherit"};
  font-family: ${({ font }) => font || `"Source Code Pro", monospace`};
  font-size: ${({ size }) => size || "inherit"};
  font-weight: ${({ weight }) => {
    switch (weight) {
      case "light":
        return 300;
      case "normal":
        return 400;
      case "medium":
        return 500;
      case "semibold":
        return 600;
      case "bold":
        return 700;
      case "extrabold":
        return 800;
      default:
        return "inherit";
    }
  }};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
  font-style: ${({ italic }) => (italic ? "italic" : "normal")};
  text-decoration: ${({ underline, strikethrough }) => {
    if (underline && strikethrough) return "underline line-through";
    if (underline) return "underline";
    if (strikethrough) return "line-through";
    return "none";
  }};
  text-align: ${({ align }) => align || "inherit"};
  line-height: ${({ lineHeight }) => lineHeight || "inherit"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "inherit"};
`;
