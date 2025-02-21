import styled from "styled-components";

export const StyledTypographyBase = styled.span<{
  color?: string;
  font?: string;
  size?: string | number;
}>`
  color: ${({ color }) => color || "inherit"};
  font-family: ${({ font }) => font || `"Source Code Pro", monospace`};
  font-size: ${({ size }) =>
    typeof size === "string" ? size : `${size || 16}px`};
  line-height: 1.5;
`;
