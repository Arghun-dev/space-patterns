import { styled } from "styled-components";
import { InlineBundle } from "./InlineBundle";

export const List = styled(InlineBundle).attrs({ as: "ul" })`
  list-style: none;

  > li {
   cursor: pointer;
   border-radius: 4px;
   padding: 0.5rem 1rem;
   transition: background-color 0.1s;

   &:hover {
     background-color: #5e5e5e;
   }
`;
