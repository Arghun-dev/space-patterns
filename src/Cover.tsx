import { styled } from "styled-components";
import { spaceSchema } from "./utils/spaceSchema";

interface CoverProps {
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  children?: React.ReactNode;
  gutter?: keyof typeof spaceSchema;
  minHeight?: string;
}

export const Cover = styled.div.attrs<CoverProps>(
  ({ children, top, bottom }) => {
    return {
      children: (
        <>
          {top && <div>{top}</div>}
          <div className="data-cover-child">{children}</div>
          {bottom && <div>{bottom}</div>}
        </>
      ),
    };
  }
)`
  display: grid;
  gap: ${({ gutter }) => spaceSchema[gutter ?? "md"]};
  min-block-size: ${({ minHeight }) => minHeight ?? "100vh"};
  grid-template-rows: ${({ top, bottom }) =>
    top && bottom
      ? "auto 1fr auto"
      : top && "auto 1fr"
      ? bottom && "1fr auto"
      : "1fr"};

  > .data-cover-child {
    align-self: center;
  }
`;
