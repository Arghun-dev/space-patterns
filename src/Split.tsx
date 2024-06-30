import styled from "styled-components";
import { fractionSchema, spaceSchema } from "./utils/spaceSchema";

interface SplitProps {
  gutter?: keyof typeof spaceSchema;
  fraction?: keyof typeof fractionSchema;
}

export const Split = styled.div<SplitProps>`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter ?? "md"]};
  grid-template-columns: ${(props) => fractionSchema[props.fraction ?? "1/2"]};
`;
