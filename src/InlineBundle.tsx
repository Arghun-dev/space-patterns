import { styled } from "styled-components";
import { justifySchema, spaceSchema } from "./utils/spaceSchema";

interface InlineBundleProps {
  gutter?: keyof typeof spaceSchema;
  justify?: keyof typeof justifySchema;
  align?: keyof typeof justifySchema;
}

export const InlineBundle = styled.div<InlineBundleProps>`
  --gutter: ${({ gutter = "md" }) => spaceSchema[gutter]};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);
  justify-content: ${({ justify = "start" }) => justifySchema[justify]};
  align-items: ${({ align = "center" }) => justifySchema[align]};
`;
