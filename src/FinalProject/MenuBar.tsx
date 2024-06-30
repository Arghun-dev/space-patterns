import { InlineBundle } from "../InlineBundle";
import { List } from "../List";
import { Pad } from "../Pad";

export const MenuBar = () => {
  return (
    <Pad padding={["xs", "lg"]} style={{ backgroundColor: "#424242" }}>
      <InlineBundle justify="between" align="center">
        <InlineBundle align="center" gutter="xl">
          <div>Logo</div>
          <nav>
            <List>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Positions</li>
            </List>
          </nav>
        </InlineBundle>

        <InlineBundle gutter="xs">
          <input placeholder="search..." />
          <List gutter="xs">
            <li>icon</li>
            <li>profile</li>
          </List>
        </InlineBundle>
      </InlineBundle>
    </Pad>
  );
};
