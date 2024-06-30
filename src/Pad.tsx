import { styled } from "styled-components";
import { spaceSchema } from "./utils/spaceSchema";

interface PadProps {
  padding?: keyof typeof spaceSchema | (keyof typeof spaceSchema)[];
}

export const Pad = styled.div<PadProps>`
  padding: ${(props) => {
    // Ensure props.padding is always an array
    const paddingArray = Array.isArray(props.padding)
      ? props.padding
      : props.padding
      ? [props.padding]
      : [];
    return paddingArray
      .map((paddingKey) => spaceSchema[paddingKey ?? "md"])
      .join(" ");
  }};
`;
