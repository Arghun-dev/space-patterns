import { styled } from "styled-components";
import { spaceSchema } from "./utils/spaceSchema";

interface LayerProps {
  gutter?: keyof typeof spaceSchema;
}

export const Layer = styled.div<LayerProps>`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter ?? "md"]};
`;
