import styled from "styled-components";

export const StyledHeading = styled.span<{ level: number }>`
  font-family: "Courier New", monospace;
  font-weight: bold;
  margin: 0;

  ${({ level }) => {
    switch (level) {
      case 1:
        return "font-size: 2rem;";
      case 2:
        return "font-size: 1.75rem;";
      case 3:
        return "font-size: 1.5rem;";
      default:
        return "font-size: 1.25rem;";
    }
  }}
`;
