import * as React from "react";
import { Mono } from ".";

const App = () => {
  return (
    <>
      <Mono.Group color="black">
        <Mono.Heading level={1} weight="bold" uppercase>
          Lorem ipsum
        </Mono.Heading>
        <Mono.Paragraph color="red">
          In a ipsum a elit euismod dapibus.
        </Mono.Paragraph>
      </Mono.Group>
    </>
  );
};

export default App;
