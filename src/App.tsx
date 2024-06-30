import { InlineBundle } from "./InlineBundle";
import { Layer } from "./Layer";
import { Pad } from "./Pad";
import { Columns, Column } from "./ResponsiveGrid";
import { Split } from "./Split";

function App() {
  return (
    <Layer gutter="xl">
      <div>
        <h2>Responsive Columns</h2>
        <Columns columns={6} gutter="md">
          <Column desktop={4} tablet={6} mobile={6}>
            <div style={{ backgroundColor: "red" }}>1</div>
          </Column>
          <Column desktop={1} tablet={3} mobile={6}>
            <div style={{ backgroundColor: "yellow" }}>2</div>
          </Column>
          <Column desktop={1} tablet={3} mobile={6}>
            <div style={{ backgroundColor: "green" }}>3</div>
          </Column>
        </Columns>
      </div>
      <div>
        <hr />
        <h2>Layer</h2>
        <Split fraction="2/3">
          <Layer gutter="xs">
            <h1>Title</h1>
            <h3>Subtitle</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
              blanditiis, enim quam quis, quisquam quos nulla est ea, sapiente
              laudantium dolor omnis possimus sint provident. Voluptatum
              blanditiis magnam tempora perspiciatis!
            </p>
          </Layer>

          <Layer gutter="lg">
            <Layer gutter="sm">
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Name" />
            </Layer>

            <button>submit form</button>
          </Layer>
        </Split>
      </div>
      <div>
        <hr />
        <Pad style={{ backgroundColor: "red" }} padding={["lg", "xs"]}>
          <h2>Inline Bundle</h2>
          <InlineBundle justify="end" align="start" gutter="xl">
            <div>Menu1</div>
            <div>Menu2</div>
            <div>Menu3</div>
            <div>Menu 4</div>
          </InlineBundle>
        </Pad>
      </div>
    </Layer>
  );
}

export default App;
