import styled from "styled-components";

export const StyledHeadingWrapper = styled.span<{
  level: 1 | 2 | 3 | 4 | 5 | 6;
}>`
  font-size: ${({ level }) => {
    switch (level) {
      case 1:
        return "32px";
      case 2:
        return "28px";
      case 3:
        return "24px";
      case 4:
        return "20px";
      case 5:
        return "18px";
      case 6:
        return "16px";
      default:
        return "16px";
    }
  }};
`;
