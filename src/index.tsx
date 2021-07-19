import React from "react";
import { render } from "react-dom";

import { Bar } from "./hw2-storybook/Bar";

render(
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <Bar bar={{ timestamp: 1, open: 30, high: 90, low: 20, close: 70 }} />
  </svg>,
  document.getElementById("root")
);
