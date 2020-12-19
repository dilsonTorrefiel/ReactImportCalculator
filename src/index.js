import React from "react";
import ReactDOM from "react-dom";

import { Add, Multiply, Subtract, Division } from "./calculator";

ReactDOM.render(
  <ul>
    <li>{Add(5, 3)}</li>
    <li>{Multiply(5, 3)}</li>
    <li>{Subtract(5, 3)}</li>
    <li>{Division(5, 3)}</li>
  </ul>,
  document.getElementById("root")
);
