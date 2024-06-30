import { Columns, Column } from "./ResponsiveGrid";

function App() {
  return (
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
  );
}

export default App;
