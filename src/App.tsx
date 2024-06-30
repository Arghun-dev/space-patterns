import { Layer } from "./Layer";
import { Columns, Column } from "./ResponsiveGrid";

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
        <Layer>
          <h1>Title</h1>
          <Layer gutter="xs">
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
        </Layer>
      </div>
    </Layer>
  );
}

export default App;
