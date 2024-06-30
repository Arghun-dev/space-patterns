import { Center } from "./Center";
import { Cover } from "./Cover";
import { InlineBundle } from "./InlineBundle";
import { Layers } from "./Layers";
import { MediaWrapper } from "./MediaWrapper";
import { Pad } from "./Pad";
import { Columns, Column } from "./ResponsiveGrid";
import { Split } from "./Split";

const Top = () => (
  <div>
    <h1>Top</h1>
  </div>
);

const Bottom = () => (
  <div>
    <h4>Bottom</h4>
  </div>
);

function App() {
  return (
    <Pad padding={"sm"}>
      <Layers gutter="xl">
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
            <Layers gutter="xs">
              <h1>Title</h1>
              <h3>Subtitle</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                blanditiis, enim quam quis, quisquam quos nulla est ea, sapiente
                laudantium dolor omnis possimus sint provident. Voluptatum
                blanditiis magnam tempora perspiciatis!
              </p>
            </Layers>

            <Layers gutter="lg">
              <Layers gutter="sm">
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Name" />
              </Layers>

              <button>submit form</button>
            </Layers>
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
        <div>
          <hr />
          <Center maxWidth="120ch">
            <h2>I am title!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              itaque aliquid officiis nam sapiente asperiores aliquam atque! Eum
              laudantium ut eos, nostrum nulla molestiae fugit excepturi
              doloribus maiores, odio aut!
            </p>
            <div>footer is this!</div>
          </Center>
        </div>
        <div>
          <hr />
          <Center
            as={Layers}
            gutter="lg"
            maxWidth="120ch"
            centerText
            centerChildren
          >
            <h2>I am title!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              itaque aliquid officiis nam sapiente asperiores aliquam atque! Eum
              laudantium ut eos, nostrum nulla molestiae fugit excepturi
              doloribus maiores, odio aut!
            </p>
            <div>footer is this!</div>
          </Center>
        </div>
        <div>
          <hr />
          <MediaWrapper ratio={[16, 9]}>
            <img src="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg" />
          </MediaWrapper>
        </div>
      </Layers>
      <div>
        <hr />
        <h2>Cover component pattern</h2>
        <Cover top={<Top />} bottom={<Bottom />} as={Pad} padding="lg">
          <div>
            This is the content of the cover component. It can be anything you
          </div>
        </Cover>
      </div>
    </Pad>
  );
}

export default App;
