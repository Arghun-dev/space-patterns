import { styled } from "styled-components";
import { spaceSchema } from "./utils/spaceSchema";

interface LayersProps {
  gutter?: keyof typeof spaceSchema;
}

export const Layers = styled.div<LayersProps>`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter ?? "md"]};
`;
