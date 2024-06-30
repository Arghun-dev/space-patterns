import styled from "styled-components";
import { spaceSchema } from "./utils/spaceSchema";

// Define the breakpoints for responsiveness
const breakpoints = {
  desktop: "1024px",
  tablet: "768px",
  mobile: "480px",
};

interface ColumnsProps {
  gutter?: keyof typeof spaceSchema;
  columns?: number;
}

interface ColumnProps {
  $span?: number;
  desktop?: number;
  tablet?: number;
  mobile?: number;
}

export const Columns = styled.div<ColumnsProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns = 1 }) => columns}, 1fr);
  gap: ${(props) => spaceSchema[props.gutter ?? "md"]};

  @media (min-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(
      ${({ columns = 4 }) => columns},
      1fr
    ); /* Default mobile columns */
  }

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(
      ${({ columns = 4 }) => columns},
      1fr
    ); /* Default tablet columns */
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(
      ${({ columns }) => columns},
      1fr
    ); /* Default desktop columns */
  }
`;

export const Column = styled.div<ColumnProps>`
  grid-column: span ${({ $span = 1 }) => $span};

  @media (min-width: ${breakpoints.mobile}) {
    ${({ mobile }) => mobile && `grid-column: span ${mobile}`};
  }

  @media (min-width: ${breakpoints.tablet}) {
    ${({ tablet }) => tablet && `grid-column: span ${tablet}`};
  }

  @media (min-width: ${breakpoints.desktop}) {
    ${({ desktop }) => desktop && `grid-column: span ${desktop}`};
  }
`;
