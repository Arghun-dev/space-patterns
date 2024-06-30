import { styled } from "styled-components";

interface CenterProps {
  maxWidth?: string;
  centerText?: boolean;
  centerChildren?: boolean;
}

export const Center = styled.div<CenterProps>`
  box-sizing: content-box;
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-inline-size: ${({ maxWidth = "100%" }) => maxWidth};
  ${({ centerText }) => centerText && "text-align: center;"}
  ${({ centerChildren }) =>
    centerChildren &&
    "display: flex; flex-direction: column; justify-content: center;"}
`;
