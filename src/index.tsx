import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import { Hello } from "./components/Hello";

const container = document.getElementById("root");
const root = createRoot(container);

ReactDOM.render(
  <Hello compire={"Typescript"} frameWork={"React"} />,
  container
);
// root.render(<Hello compire={"Typescript"} frameWork={"React"} />);
